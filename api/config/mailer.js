const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.NODEMAILER_EMAIL, // generated ethereal user
        pass: process.env.NODEMAILER_EMAIL_PW, // generated ethereal password
    },
});

transporter.verify().then(() => {
    console.log("Ready for send emails");
});

module.exports = transporter;
