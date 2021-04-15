// import express from 'express'; // ES2015 Module
const express = require("express");
const server = express();
// teaches express how to read JSON from the request body
server.use(express.json());
let users = [];
// http://localhost:5000/
server.get("/", (req, res) => {
    res.status(200).send("<h1>hello World</h1>");
});
server.get("/users", (req, res) => {
    res.status(200).json(users);
});
server.post("/users", (req, res) => {
    // read the user information
    const userData = req.body; // needs express.json() middleware
    // add the user to the array
    users.push(userData);
    // send back a response (the whole list)
    res.status(201).json(users);
});
// write PUT endpoint /users/brit or /users/luis
server.put("/users/:name", (req, res) => {
    const name = req.params.name;
    const changes = req.body;
    let found = users.find(u => u.name === name);
    if (found) {
        Object.assign(found, changes);
        res.status(200).json(users);
    } else {
        res.status(404).json({ message: "not found" });
    }
});
// write DELETE endpoint
server.delete("/users/:name", (req, res) => {
    const name = req.params.name;
    let found = users.find(u => u.name === name);
    if (found) {
    } else {
        res.status(404).json({message: "not found"
        });
    })
});
const httpMessage = {
    headers: {},
    body: {
        // data goes in the body
    },
};
const port = 5000;
server.listen(port, () => console.log("server running using nodemon"));
