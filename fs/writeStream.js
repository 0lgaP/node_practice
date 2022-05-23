const fs = require("fs")

const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8")
const readStream = fs.createReadStream("./storage-files/colors.md", "utf-8")


// info flow -> reads from readStream and writers to writeStream

readStream.on("data", data => {
  writeStream.write(data)
})

process.stdin.pipe(writeStream) // add text to a file
readStream.pipe(writeStream) // copy the file

// process.stdout.write("hello")
// process.stdout.write(" world \n")