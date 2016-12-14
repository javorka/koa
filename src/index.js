/**
 * @summary Main server file
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/1/16.
 */

'use strict';

import 'babel-polyfill';
import Koa from 'koa';
import send from 'koa-send';
import config from './config';
import * as MW from './middleware';
import rootController from './controller/rootController';

const app = new Koa();

// middleware
app.use(MW.bodyparser);
app.use(MW.devMiddleware);
app.use(MW.hotMiddleware);

// routes
app.use(rootController.routes());

app.use(async (ctx) => {
  ctx.body = 'Hello world';
});

// static
app.use(async (ctx) => {
  await send(ctx, 'index.html');
});

app.listen(config.port);
