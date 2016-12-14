/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/14/16.
 */

'use strict';
import Router from 'koa-router';
import fooController from './fooController';

const router = new Router({
  prefix: '/api'
});

router.use('/foo', fooController.routes());

export default router;
