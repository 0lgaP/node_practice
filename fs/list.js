const fs = require("fs")


// const files = fs.readdirSync("./assets") => sync
// const files = fs.readdir("./assets", (err, files) => {} => async

const files = fs.readdir("./assets", (err, files) => {
  if(err) {
    throw err
  }
  
  console.log(files)
  console.log("complete")
})
console.log("started reading")
