const cp = require("child_process")

cp.exec("open http://0lga.ca")
cp.exec("open -a Teminal .")
cp.exec("node readStream", (err, data, stderr) => {
  if (err) {
    throw err
  }
  console.log(data)
  console.log(stderr)
})