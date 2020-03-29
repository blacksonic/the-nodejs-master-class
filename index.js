'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  response.end('Hello World\n');

  const requestParameters = {
    path: trimmedPath,
    method: request.method.toLowerCase(),
    query: parsedUrl.query,
    headers: request.headers
  };
  console.log(`Request received: ${JSON.stringify(requestParameters, null, 2)}`);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listeninng on port ${port}`));
