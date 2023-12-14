const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./config/config");
const PORT = config.config.PORT;
const cors = require("cors");
const mongoose = require("mongoose");

const dbConnect = () => {
	mongoose
		.connect(config.config.MONGO_URL)
		.then(() => console.log("Database connected"))
		.catch((err) => console.log("Error connecting"));
};

const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const orderRoute = require("./routes/order.routes");
const passport = require("passport");
require("./middleware/passport");
app.use(cors());
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
