/**
 * @summary Webpack middleware
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/1/16.
 */

'use strict';

import webpack from 'webpack';
import { devMiddleware as dev, hotMiddleware as hot } from 'koa-webpack-middleware';
import devConfig from '../webpack.config.dev';

const compile = webpack(devConfig);

export const devMiddleware = dev(compile, {
  // some config here
});
export const hotMiddleware = hot(compile, {
  // some config here
});
