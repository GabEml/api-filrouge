const express = require('express');
const appointmentController = require("../controller/appointment");

const appointmentRouter = express.Router();

appointmentRouter.route("/").get(appointmentController.getAllAppointments);
appointmentRouter.route("/:id").get(appointmentController.getAppointment);
appointmentRouter.route("/:id").put(appointmentController.updateAppointment);
appointmentRouter.route("/:id").delete(appointmentController.deleteAppointment);

module.exports = appointmentRouter;
