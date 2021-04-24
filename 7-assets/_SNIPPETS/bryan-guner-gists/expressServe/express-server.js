const express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send("<p>Hello World</p>");
});

// will get name as dynamic parameter
app.get("/user/:name", function (req, res) {
    var name = req.params.name;
    res.send("Hello: " + name);
});

let server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});