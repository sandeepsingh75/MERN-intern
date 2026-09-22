const express = require("express");
const {
  usersList,
  createUser,
  user,
  replaceUserData,
  deleteUser,
  userLogin,
} = require("../Controllers/userController");
const userRouter = express.Router();
const { body } = require("express-validator");

const userValidate = [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Please enter a valid name"),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email"),
    body("password")
      .isString()
      .withMessage("Password must be text")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters"),
  ];

userRouter.get("/", usersList);

userRouter.get("/:id", user);

userRouter.post("/login", userLogin);

// userRouter.post("/create", userValidate, createUser );
userRouter.post("/create", userValidate, createUser );

userRouter.put("/:id", replaceUserData);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
