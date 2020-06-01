const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// we can create a random swim command generator function and call it within res.end to send the random command
const randomGenerator = () => {
  let commands = ['up', 'down', 'left', 'right'];
  let randomElement = Math.floor(Math.random() * 4);
  return commands[randomElement];
}

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // write conditionality to filter the type of command input method (i.e. keypress, typed command, or command from client) and handle appropriately.
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET') {
    //write conditional statement for req.url
    if (req.url === './water-lg.jpg') {
      res.writeHead(404, headers);
      res.end();
    } else {
      res.writeHead(200, headers);
      res.end(messageQueue.dequeue());
    }
  }

  next(); // invoke next() at the end of a request to help with testing!
};
