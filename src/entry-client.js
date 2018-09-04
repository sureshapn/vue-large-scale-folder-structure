import Vue from 'vue';
import {createApp} from "./app";

const { app, router, store } = createApp();

Vue.mixin({
	beforeRouteUpdate (to, from, next) {
		const { asyncData } = this.$options;
		if (asyncData) {
			asyncData({
				store: this.$store,
				route: to
			}).then(next).catch(next)
		} else {
			next()
		}
	}
});

if(window.__INITIAL_STATE__){
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
	
	router.beforeResolve((to, from, next) => {
	
		const matched = router.getMatchedComponents(to);
		const prevMatched = router.getMatchedComponents(from);
		
		let diffed = false;
		
		const activated = matched.filter((c, i) => {
			return diffed || (diffed = (prevMatched[i] !== c));
		});
		
		const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
		
		if (!asyncDataHooks.length) {
			return next()
		}
		
		bar.start();
		
		Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
			.then(() => {
				bar.finish();
				next();
			})
			.catch(next)
	});
	
	app.$mount('#app');
});

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
	navigator.serviceWorker.register('/service-worker.js')
}
