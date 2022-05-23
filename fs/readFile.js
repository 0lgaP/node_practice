const fs = require("fs")
const text = fs.readFileSync("./assets/ReadMe.md", "utf-8")
console.log(text)

fs.readFile("./assets/ReadMe.md", "utf-8", (err, text2) => {
  if (err) {
    console.log(err)
  }
  console.log("file contents read")
  console.log(text2)
})

fs.readFile("./assets/0lga_01.jpg", (err, img) => {
  if (err) {
    console.log(err)
  }
  console.log("that img")
  console.log(img)
})



