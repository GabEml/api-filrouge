const express = require('express');
const organisationController = require('../controller/organisation')

const organisationRouter = express.Router();

organisationRouter.route("/").get(organisationController.getAllOrganisations);
organisationRouter.route("/").post(organisationController.createOrganisation);
organisationRouter.route("/:id").get(organisationController.getOrganisation);
organisationRouter.route("/:id").put(organisationController.updateOrganisation);
organisationRouter.route("/:id").delete(organisationController.deleteOrganisation);

module.exports = organisationRouter;
