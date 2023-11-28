const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

const dbConnect = () => {
	mongoose
		.connect(process.env.MONGO_URL)
		.then(() => console.log("Database connected"))
		.catch((err) => console.log("Error connecting"));
};

const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const orderRoute = require("./routes/order.routes");
const passport = require("passport");
require("./middleware/passport");
app.use(passport.initialize());
app.use("/user", userRoute);
app.use(
	"/product",
	passport.authenticate("jwt", { session: false }),
	productRoute
);
app.use("/order", orderRoute);
app.use((req, res) => {
	res.send("404 not found");
});
app.listen(PORT, (req, res) => {
	dbConnect();
	console.log("listening on port " + PORT);
});
