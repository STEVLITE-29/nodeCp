const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "stevlite29@gmail.com",
        pass: process.env.PASS
    }
})

const sendMail = (recipient, content, subject) => {
    transporter.sendMail({
            from: "stevlite29@gmail.com",
            to: recipient,
            subject: subject,
            text: content
        }, function(err, info) {
            if (err) 
                console.log(err)
            else
            console.log("Email sent: " + info.response)
    }
)}


sendMail("okeh502@gmail.com", "Hello, this is a test email from nodemailer", "Here at GoMyCode")