// contains info about current process and tools to interact with the process
console.log(process.pid)
console.log(process.versions.node)

console.log(process.argv)
//destructure argv
const [, , first, last] = process.argv;

// provide flags to argv to asign meaning to the argv passed
// node globalProcess.js --user ned --greeting "Hidely ho Neighboureeno"
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag]
}
const user = grab("--user")
const greeting = grab("--greeting")

console.log(`${user} says ${greeting}`)