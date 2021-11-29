// require your server and launch it
const server = require('./api/server');

const port = 5000;
const message = `Server Running: localhost:${port}`
// START YOUR SERVER HERE
server.listen(port, () => {
    console.log(message)
})