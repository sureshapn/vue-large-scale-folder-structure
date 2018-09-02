module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["@vue/airbnb","plugin:vue/base","plugin:vue/essential","plugin:vue/strongly-recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: [
    "vue",
    "html"
  ]
};
