/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/14/16.
 */

'use strict';
import Router from 'koa-router';

const router = new Router();

router.get('/', () => {
  console.log('Im in');
});

export default router;
