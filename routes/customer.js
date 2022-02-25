const express = require('express');
const customerController = require('../controller/customer')

const customerRouter = express.Router();

customerRouter.route("/").get(customerController.getAllCustomers);
customerRouter.route("/").post(customerController.createCustomer);
customerRouter.route("/:id").get(customerController.getCustomer);
customerRouter.route("/:id").put(customerController.updateCustomer);
customerRouter.route("/:id").delete(customerController.deleteCustomer);

module.exports = customerRouter;
