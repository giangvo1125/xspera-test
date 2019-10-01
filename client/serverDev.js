import path from 'path'
import express from 'express'
import webpack from 'webpack'
import compression from 'compression'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfigDev from './webpack.config.dev'
import webpackConfigProd from './webpack.config.prod'
import {domain, port} from './config'

const app = express();

// compress responses
app.use(compression())

const env = process.env.NODE_ENV || 'development'
if(env == 'production'){
	app.use(webpackDevMiddleware(webpack(webpackConfigProd), {
	  publicPath: webpackConfigProd.output.publicPath,
	  stats: { colors: true }
	}));
}
else {
	app.use(webpackDevMiddleware(webpack(webpackConfigDev), {
	  publicPath: webpackConfigDev.output.publicPath,
	  stats: { colors: true }
	}));
}

app.use('*/public', express.static(__dirname + '/public'))

app.use('*/assets', express.static(__dirname + '/assets'))


app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening on http://'+domain+':'+ (process.env.PORT || port))
})
