const { text } = require("body-parser");
const { model } = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

var transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "87242ad26a9aa9",
		pass: "37bc08585b8ac7",
	},
});
function send(body, subject, sendTo) {
	var mailOptions = {
		to: sendTo,
		subject: subject,
		text: body,
	};

	transport.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
}

module.exports = { transport, send };
