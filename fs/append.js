const fs = require("fs")
const colorData = require("./assets/colors.json")

colorData.colors.forEach(c => {
  fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.category} \n`, err => {
    if (err) {
      throw err
    }
  })
})