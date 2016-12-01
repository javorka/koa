/**
 * @summary Main server file
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/1/16.
 */

'use strict';

import 'babel-polyfill';
import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello world';
});

app.listen(3000);
