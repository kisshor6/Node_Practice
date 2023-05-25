const path = require('path');
console.log(path.dirname('E:/js practice/nodejs part II/pathmodule.js'));

console.log(path.extname('E:/js practice/nodejs part II/pathmodule.js'));

console.log(path.basename('E:/js practice/nodejs part II/pathmodule.js'));


const a =  path.parse('E:/js practice/nodejs part II/pathmodule.js');

console.log(a.name);
