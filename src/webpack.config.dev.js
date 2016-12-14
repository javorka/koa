/**
 * @summary Description
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 12/2/16.
 */

'use strict';
import path from 'path';

export default {
  context: __dirname,
  entry: './public/foo',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  }
};
