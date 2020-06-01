
const messageQueue = require('./js/messageQueue')

const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize((message) => {messageQueue.enqueue(`${message}`)});

const httpHandler = require('./js/httpHandler');
// after initialize method is called, now http messageQueue has same properties as messageQueue.js
httpHandler.initialize(messageQueue);
// therefore, within httphandler, we can use the messageQueue's dequeue method to pass back in res.end()

const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
