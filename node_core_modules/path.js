const path = require('path');

console.log(path); // let console path module what is exist inside.

const imgPath = '/home/tazri/Tazri/My Work/Learn/JavaScript/learn-nodejs/src/img';
const jsPath = '/home/tazri/Tazri/My Work/Learn/JavaScript/learn-nodejs/src/js/hello.js';
const pathBaseName = path.basename(jsPath);
const pathDirName = path.dirname(jsPath);

console.log('path.basename(imgPath) = ',path.basename(imgPath)); // return basename
console.log('path.dirname(imgPath) = ',path.dirname(imgPath)); // return dirname
console.log('path.extname(imgPath) = ',path.extname(jsPath)); // return extname
console.log('path.parse(imgPath) = ',path.parse(jsPath)); // return object where show details about path
console.log('path.delimiter = ',path.delimiter); // return : or ; as a string

let objectForPathFormat = {
    base : pathBaseName,
    dir : pathDirName
}

let thisPathDoseNotExist = '/home/d';
let myName = 'Md Tazri';

console.log('path.format(objectForPathFormat) = ',path.format(objectForPathFormat)); // return a path
console.log('path.format(dir:\'unkow/dkj\',base:l.js) = ',path.format({dir:'d/s/s',base:'j.js'})); // return a useless path

// isAbsolute;
console.log('path.isAbsolute()',path.isAbsolute(pathDirName)); // return boolean type value;
console.log('path.isAbsolute(thisPathDoseNotExist) = ',path.isAbsolute(thisPathDoseNotExist)); // return boolean type value;
console.log('path.isAbsolute(myName) = ',path.isAbsolute(myName)); // return boolean type value;

// path.isAbsolute return true or false base on this string structure is maintain path rule or not.

// path.join()
console.log('path.join(thisPathDoseNotExist,myName) = ',path.join(thisPathDoseNotExist,'d','34','...',myName)); // return a string like path

// path.normalize('path as string');
let pathString = 'name/d/ dl\\\\dls/L/../dj';
console.log('path.normalize(ptahString) = ',path.normalize(pathString)); // it remove just .. in the string

// // path.posix
// console.log('path.posix = ',path.posix); // return posix

// path.relative
console.log('path.relative(imgPath,jsPath) = ',path.relative(imgPath,jsPath)) // return relative from secound path.

// path.resolve
console.log('path.resolve(imgPath) = ',path.resolve(imgPath)); // return the path

// path.sep
console.log('path.sep = ',path.sep); // return /

// path.win32
console.log('path.win32 = ',path.win32); // return this object
