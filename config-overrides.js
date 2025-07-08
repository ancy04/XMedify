const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
    util: require.resolve("util/"),
    url: require.resolve("url/"),
    crypto: require.resolve("crypto-browserify"),
    assert: require.resolve("assert/"),
    process: require.resolve("process/browser.js") // ✅ IMPORTANT
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser.js", // ✅ ENSURE EXTENSION IS INCLUDED
      Buffer: ["buffer", "Buffer"]
    })
  ]);

  return config;
};
