const fs = require("fs")

//1st task
fs.writeFile("welcome.txt", "Hello Node" , err => {
    err ? console.error(err) : console.log("File created")
})

//2nd task
fs.readFile("hello.txt", (err, data) => {
    err ? console.error(err) : console.log(data.toString())
})