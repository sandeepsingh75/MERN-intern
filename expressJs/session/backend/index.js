const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
const router = require("./routes/staticRouter");
const path = require("path");
const dbConnection = require("./config/db.js");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");

dotenv.config();

dbConnection();
app.use(express.json());
app.use(express.urlencoded());

app.use(
  session({
    secret: "secretpassword",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/crud",
      collectionName: "mysessions",
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  }),
);

app.get("/", (req, res) => {
  if (req.session.username) {
    res.send(`<h1>User name from session is : ${req.session.username} </h1>`);
  } else {
    res.send("<h1>No User name not found in session. </h1>");
  }
});

app.get("/set-username", (req, res) => {
  req.session.username = "yahuBaba";
  res.send("<h1>User name has been set in session. </h1>");
});

app.get("/get-username", (req, res) => {
  if (req.session.username) {
    res.send(`<h1>User name from session is : ${req.session.username} </h1>`);
  } else {
    res.send("<h1>No User name not found in session. </h1>");
  }
});

app.get("/destroy", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send("Failed to destroy session");
    }
    res.send("<h1> Session destroy seccessfully </h1>");
  });
});

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"));

app.use("/users", userRouter);
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
