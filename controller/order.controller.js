const Orders = require("../model/order.model");
const addOrder = (req, res) => {
	try {
		let newOrder = new Orders(req.body);
		newOrder.save();

		res.json({
			message: "Order added successfully",
			success: true,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});

		console.log(err);
	}
};
const getAll = async (req, res) => {
	try {
		let allOrders = await Orders.find();

		res.json({
			orders: allOrders,
			success: true,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});
		console.log(err);
	}
};

const getOrderByStatus = async (res, req) => {
	try {
		let pendigOrders = await Orders.find({ status: req.params.status });

		res.json({
			success: true,
			orders: pendigOrders,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});
		console.log(err);
	}
};
const getOrderById = async (req, res) => {
	try {
		let order = await Orders.findById(req.params.id);
		res.json({
			Order: order,
			success: true,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});
		console.log(err);
	}
};
const editOrder = async (req, res) => {
	try {
		await Orders.findByIdAndUpdate(req.params.id, req.body);
		res.json({
			message: "Order updated successfully",
			success: true,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});
	}
};
const deleteOrder = (req, res) => {
	try {
		Orders.findByIdAndDelete(req.params.id);
		res.json({
			message: "delete Order successfully",
			success: true,
		});
	} catch (err) {
		res.json({
			success: false,
			message: err.message,
		});
		console.log(err);
	}
};

module.exports = { getAll, getOrderById, deleteOrder, editOrder, addOrder };
