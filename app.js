'use strict';

const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const mainCtl = require('./lib/main-router');

app.listen(3000);
app.on('error', (err, cxt) => {
    console.log('Caught exception: ', err, cxt);
});

router.use('/', mainCtl.index)

app.use(router.routes()).use(router.allowedMethods());
