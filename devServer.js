var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var devConfig = require('./webpack.config.dev');

var devServer = express();
var port = 3000;
var compiler = webpack(devConfig);

devServer.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: devConfig.output.publicPath
}));
devServer.use(webpackHotMiddleware(compiler));

devServer.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.dev.html'));
});

devServer.listen(port, 'localhost', function(err) {
  if (err) {
    console.error(err);
    return;
  }

  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
