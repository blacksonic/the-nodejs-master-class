'use strict';

const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  request.on('data', data => buffer += decoder.write(data));
  request.on('end', () => {
    buffer += decoder.end();

    response.end('Hello World\n');

    const requestParameters = {
      path: trimmedPath,
      method: request.method.toLowerCase(),
      query: parsedUrl.query,
      headers: request.headers,
      payload: buffer
    };
    console.log(`Request received: ${JSON.stringify(requestParameters, null, 2)}`);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listeninng on port ${port}`));
