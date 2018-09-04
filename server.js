'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const template = fs.readFileSync('./src/index.template.html', 'utf-8');
const PORT = 3000;

const server = express();

const renderer = createBundleRenderer(bundle, {
	template: template,
	clientManifest: clientManifest,
	runInNewContext: false
});

server.use('/dist', express.static(path.resolve(__dirname, './dist')));
server.use('/public', express.static(path.resolve(__dirname, './public')));
server.use('/manifest.json', express.static(path.resolve(__dirname, './manifest.json')));
server.use('/service-worker.js', express.static(path.resolve(__dirname, './dist/service-worker.js')));

server.get('*', (req, res) => {
	
	res.setHeader("Content-Type", "text/html");

	const context = {
		url: req.url,
		title: "Headline News"
	};
	
	renderer.renderToString(context, (err, html) => {
		if(err){
			if(err.code === 404){
				res.status(400).send('Not found');
			}else{
				console.log(err);
				res.status(500).send('Internal server error');
			}
		}else{
			res.send(html);
		}
	});

});

const port = PORT || 3000;

server.listen(port, () => {
	console.log("Server started")
});
