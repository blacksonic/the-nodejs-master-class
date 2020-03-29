'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hello World');
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listeninng on port ${port}`));
