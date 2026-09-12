const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/error", (req, res, next) => {

    next(new Error("Something went wrong"));

});

// Error-handling middleware
app.use((err, req, res, next) => {

    res.status(500).send(err.message);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});