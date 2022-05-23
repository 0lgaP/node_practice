const fs = require("fs")

const md = `# This is  a new file`

fs.writeFile("./assets/notes.md", md.trim(), err =>{
  if(err){
    throw err
  }
  console.log("fileSaved")
})