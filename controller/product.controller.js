const Products = require("../model/product.model");

const addProduct = (req, res) => {
	try {
		// const product = {
		// 	name: req.body.name,
		// 	quantity: req.body.quantity,
		// 	price: req.body.price,
		// 	productCode: req.body.productCode,
		// 	description: req.body.description,
		// 	images: req.files,
		// };
		req.body.userId = req.user.id;
		const newProduct = new Products(req.body);
		newProduct
			.save()
			.then((product) => {
				res.json({
					message: "Product added successfully",
					success: true,
				});
			})
			.catch((err) => {
				res.status(500);
				console.log(err);
			});
	} catch (err) {
		console.log(err);
	}
};
const getAll = async (req, res) => {
	try {
		const products = await Products.find();

		res.json({
			products: products,
			success: true,
		});
	} catch (err) {
		console.log(err);
	}
};
const getProductById = async (req, res) => {
	try {
		const product = await Products.findById(req.params.id).then((product) => {
			res.json({
				product: product,
				success: true,
			});
		});
	} catch (err) {
		console.log(err);
	}
};
const editProduct = async (req, res) => {
	try {
		await Products.findByIdAndUpdate(req.params.id, req.body).then(
			(product) => {
				res.json({
					success: true,
					message: "Product updated successfully",
				});
			}
		);
	} catch (err) {
		console.log(err);
	}
};
const deleteProduct = async (req, res) => {
	try {
		await Products.findOneAndDelete(req.params.id).then((product) => {
			res.json({
				success: true,
				message: "Product deleted successfully",
			});
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	editProduct,
	deleteProduct,
	getAll,
	getProductById,
	addProduct,
};
