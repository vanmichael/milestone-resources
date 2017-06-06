const Koa = require('koa');
//const Router = require('koa-router');

const app = new Koa();
//const app = new Router();

app.use(function *() {
  this.body = '<h1>Hello Van</h1>';
});

app.listen(3000);
