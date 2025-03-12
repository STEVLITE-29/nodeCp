const fs = require("fs")

fs.writeFile("welcome.txt", "Hello Node" , err => {
    err ? console.error(err) : console.log("File created")
})
