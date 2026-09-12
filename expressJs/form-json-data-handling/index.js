const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    message: "Registration successful",
    name,
    email,
    password,
  });
});


app.post("/", (req, res) => {
  const { name, address, age } = req.body;
  console.log(`user name:${name}, user address:${address}, user age:${age}`);

  res.json({
    message: "User created successfully",
    user: req.body,
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
