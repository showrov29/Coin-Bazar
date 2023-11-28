const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	// team: {
	// 	type: String,
	// 	required: true,
	// },
	category: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	review: {
		type: Number,
		default: 0,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	images: {
		type: [""],
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
productSchema.plugin(uniqueValidator);
