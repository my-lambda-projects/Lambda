const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: "no such endpoint" })
})

server.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        message: err.message,
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        stack: err.stack
    })

    if (status === -1) {
        next();
    }
})

module.exports = server;