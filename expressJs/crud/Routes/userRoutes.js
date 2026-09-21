const express = require("express");
const {
  usersList,
  createUser,
  user,
  replaceUserData,
  deleteUser,
} = require("../Controllers/userController");
const userRouter = express.Router();
const { body} = require("express-validator");

const userValidate = [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Please enter a valid name"),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email"),
    body("age")
      .isInt({ min: 18 })
      .withMessage("Age must be at least 18"),
  ];

userRouter.get("/", usersList);

userRouter.get("/:id", user);

userRouter.post("/create", userValidate, createUser );

userRouter.put("/:id", replaceUserData);

userRouter.patch("/:id", (req, res) => {
  res.json({ message: "all fields updated" });
});

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
