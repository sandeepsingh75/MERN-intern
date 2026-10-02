const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {

    res.cookie("username", "Sandeep");

    res.json({
        success: true,
        message: "Cookie created"
    });
});

app.get("/get-cookie", (req, res) => {
    console.log(req.cookies);

    // read specifuc cookie
    const username = req.cookies.username;
// console.log(username);

    res.json({
        // cookies: req.cookies
        cookie: username
    });

});

app.get("/logout", (req, res) => {

    res.clearCookie("username");

    res.json({
        success: true,
        message: "Cookie deleted"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});