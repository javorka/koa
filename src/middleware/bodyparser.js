/**
 * @summary Middleware for parsing body
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/1/16.
 */

'use strict';
 
import parser from 'koa-bodyparser';

app.use(parser());