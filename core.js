const path = require("path");
const util = require("util")
const v8 = require("v8")
//you can destructure util into 
//const { log } = require("util")

const dirUploads = path.join(__dirname, "www", "files", "uploads")

console.log(dirUploads)
util.log(path.basename(__filename))
util.log(v8.getHeapCodeStatistics())