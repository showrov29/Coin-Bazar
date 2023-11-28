const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const orderSchema = mongoose.Schema({
	productId: {
		type: Object,
		required: true,
	},
	tempToken: {
		type: Number,
		expires: 120,
	},

	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	note: {
		type: String,
	},
	status: {
		type: Boolean,
		default: true,
	},
	transectionId: {
		type: String,
		required: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
	},
});
const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;
mongoose.plugin(uniqueValidator);
