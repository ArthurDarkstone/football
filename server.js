const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use('/static', express.static(`${__dirname}/static`));
app.use('/v1', proxy({
  target: '192.168.1.100:5000',
  changeOrigin: true,
  pathRewrite: {
    '^/v1': ''
  }
}));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.listen(8060);
