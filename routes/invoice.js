const express = require('express');
const invoiceController = require("../controller/invoice");

const invoiceRouter = express.Router();

invoiceRouter.route("/").get(invoiceController.getAllInvoices);
invoiceRouter.route("/:id").get(invoiceController.getInvoice);
invoiceRouter.route("/:id").put(invoiceController.updateInvoice);
invoiceRouter.route("/:id").delete(invoiceController.deleteInvoice);
invoiceRouter.route("/create-checkout-session/:id").post(invoiceController.createInvoice);

module.exports = invoiceRouter;
