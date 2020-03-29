'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const method = request.method.toLowerCase();

  response.end('Hello World\n');

  console.log(`Request received on path: ${trimmedPath} with method: ${method}`);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listeninng on port ${port}`));
