/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/2/16.
 */

'use strict';

module.exports = {
  context: __dirname,
  entry: './src/public/foo',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
};
