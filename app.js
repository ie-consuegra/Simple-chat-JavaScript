const express = require('express');

const app = express();

/*
app.get('/', (req, res) => {
  res.end('Chat started');
});
*/

app.use(express.static(`${__dirname}/public`)); // Serve to client the files in public directory inside the directory of the project.

app.listen(3000, () => {
  console.log('Server started');
});
