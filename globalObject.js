const path = require("path")

console.log(__dirname) // /home/olga/Code/node_practice
console.log(__filename) // /home/olga/Code/node_practice/globalObject.js
console.log(`${path.basename(__filename)}`) //globalObject.js
