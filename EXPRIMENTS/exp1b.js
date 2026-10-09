const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button was clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

button.on("click", () => {
    console.log("Performing another click action...");
});

console.log("Simulating click...");
button.emit("click");

console.log("Simulating mouseover...");
button.emit("mouseover");