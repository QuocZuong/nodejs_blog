const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/", (req, res) => {
    return res.send("hello world");
});
app.listen(port, () => console.log("listening in port 3000!"));
