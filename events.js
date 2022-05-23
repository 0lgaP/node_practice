const events = require("events");
const { EventEmitter } = require("stream");

const emmiter = new events.EventEmitter();

emmiter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`)
})

emmiter.emit("customEvent", "Hello WOrld", "COmputer");
emmiter.emit("customEvent", "neat", "olga")

process.stdin.on("data", data => {
  const input = data.toString().trim();
  if(input === "exit") {
    emmiter.emit("customEvent", "Goodbye!", "process")
    process.exit()
  }
  emmiter.emit("customEvent", input, "Terminal")
})