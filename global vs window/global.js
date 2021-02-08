// console.log(global);
// console.log(arguments);

// console.log(__dirname); // it print folder name with path
// console.log(__filename); // it print file name with path

// question where are access from it.

let globalOne = require('./globalTwo');
let emptyObject = require('./empty');
let multiExports = require('./multiExports');
let _ = require('lodash'); // import from package.json dependencies

console.log('emptyObject = ',emptyObject); // {}
console.log('globalOne = ',globalOne);
console.log('multiExports = ',multiExports);
// console.log(_); // see whole lodash export;

const friendNames = multiExports.nameOfFriends;
console.log('frendNames = ',friendNames);
const filterFriendNames = _.compact(friendNames);
console.log('filterFriendNames = ',filterFriendNames);


// behind the scenes node js
/**
 * (function(exports,require,module,__filename,__dirname){
 * code block;
 * return module by default;
 * })
 */

 // node js behind the scenes work with if