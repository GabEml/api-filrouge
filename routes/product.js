const express = require('express');
const productController = require('../controller/product')

const productRouter = express.Router();

productRouter.route("/").get(productController.getAllProducts);
productRouter.route("/").post(productController.createProduct);
productRouter.route("/:id").get(productController.getProduct);
productRouter.route("/:id").put(productController.updateProduct);
productRouter.route("/:id").delete(productController.deleteProduct);

module.exports = productRouter;
