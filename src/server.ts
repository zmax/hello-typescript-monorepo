import express from 'express';
import nunjucks from 'nunjucks';
// import webpack from 'webpack';

// const config: webpack.Configuration = require('../webpack.config');
// const compilier = webpack(config);
const app = express();

// Here HMR story begins
declare const module: any;

function bootstrap() {
  // app.use(require("webpack-hot-middleware")(compilier));
  nunjucks.configure('dist', {
    autoescape: true,
    express: app,
  });

  app.use(express.static("dist"));

  app.get('/', (req, res) => {
    // res.send('Hello World!!');
    res.render('index.html');
    
  });

  const server = app.listen(3000, () => {
    console.log('server listening on port http://localhost:3000 .');
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      server.close();
    });
  }
}
bootstrap();