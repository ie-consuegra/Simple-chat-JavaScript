const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();


const server = http.createServer(app);

// Server config
app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`)); // Serve to client the files in public directory inside the directory of the project.

// Server initialization
server.listen(app.get('port'), () => {
  console.log('Server started');
});

// Sockets logic
require('./sockets')(server);
