const express = require('express');
const userController = require('../controller/user');

const userRouter = express.Router();

userRouter.route("/").get(userController.getAllUsers);
userRouter.route("/").post(userController.createUser);
userRouter.route("/:id").get(userController.getUser);
userRouter.route("/:id").put(userController.updateUser);
userRouter.route("/:id").delete(userController.deleteUser);

module.exports = userRouter;
