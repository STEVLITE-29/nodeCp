const passwordGenerator = require("generate-password")
const generateRandomPassword = () => {
    const password = passwordGenerator.generate({
        length: 8, 
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        strict: true
    })
    console.log("Your Password: ", password)
}
generateRandomPassword();