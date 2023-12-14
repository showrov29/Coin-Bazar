const express = require("express");

const router = express.Router();
const ProductController = require("../controller/product.controller");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// const multer = require("multer");
const passport = require("passport");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/products')
//     },
//     filename: function (req, file, cb) {
//       const filename = Date.now()+file.originalname
//       cb(null, filename)
//     }
//   })

//   const upload = multer({ storage: storage })

router.use(bodyParser.json());
router.use(urlencodedParser);
router.post("/api/add", ProductController.addProduct);
router.get("/api/all", ProductController.getAll);
router.get("/api/show/:id", ProductController.getProductById);
router.put("/api/edit/:id", ProductController.editProduct);
router.delete("/api/delete/:id", ProductController.deleteProduct);

module.exports = router;
