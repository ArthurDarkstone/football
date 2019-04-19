const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use('/static', express.static(`${__dirname}/static`));
app.use('/v1', proxy({
  target: 'http://match.yunbaoainio.cn/sport/v1',
  changeOrigin: false,
  pathRewrite: {
    '^/sport/v1': ''
  }
}));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.listen(6000);
