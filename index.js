var path = require('path');
// Require the package.json
var pkg = require('./package.json');
// Establish a root directory
var testRoot = __dirname;

// Export the project defaults
module.exports = {
  root: testRoot,
  pkg: pkg
}
