/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/2/16.
 */

'use strict';
const bar = require('./bar');
module.exports = {
  foo: 'foo',
  foobar: 'foo' + bar
};
