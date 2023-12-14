const { randomUUID } = require("crypto");
const { transporter, send } = require("../email");
const Users = require("../model/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
require("dotenv").config();
const bcrypt = require("bcrypt");

const register = async (req, res) => {
	const x = randomUUID();
	const newUser = new Users(req.body);
	// newUser.verificationCode = x;

	newUser
		.save()
		.then((user) => {
			send(
				"https://aea1-103-239-252-36.ngrok-free.app/user/verify/" + x,
				"Verify Your Email",
				req.body.email
			);
			res.status(201).json({
				message: "Success",
			});
		})
		.catch((error) => {
			res.status(500);
			res.send(error.message);
		});
};

const login = async (req, res) => {
	try {
		const user = await Users.findOne({ email: req.body.email });
		const token = jwt.sign(
			{ id: user._id, name: user.name },
			config.config.SECRET_KEY,
			{ expiresIn: "2d" }
		);
		const data = {
			name: user.name,
			email: user.email,
			phone: user.phone,
		};

		if (user) {
			if (user.varified == true) {
				bcrypt.compare(
					req.body.password,
					user.password,
					function (err, result) {
						if (result) {
							res.json({
								success: true,
								message: "Login successful",
								token: "Bearer " + token,
							});
						} else {
							res.status(403);
							res.json({
								message: "Incorrect password",
							});
						}
					}
				);
			} else {
				res.json({
					message: "Your Email is not varified yet",
				});
			}
		} else {
			res.json({
				message: "No Account is registered for this email",
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const forgetPassword = (req, res) => {
	//todo; find a user with provided email

	function generateRandomNumber() {
		var min = 1000; // minimum value (inclusive)
		var max = 9999; // maximum value (inclusive)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var randomNumber = generateRandomNumber();
	send(randomNumber, "Verify Your Email", req.body.email);

	res.json({
		code: randomNumber,
	});
	//todo: send an email with the random number
};
const changePassword = (req, res) => {};

const verifyUser = (req, res) => {
	const date = new Date();

	res.json({
		success: true,
		message: "Your account has been verified",
	});
};

const upadateEmail = (req, res) => {};

module.exports = {
	register,
	login,
	verifyUser,
	forgetPassword,
	changePassword,
};
