const express = require('express');
const next = require('next');
 
const dev = process.env.NODE_ENV !== 'production';
// @ts-ignore
const app = next({ dev });
const handle = app.getRequestHandler();
 
app.prepare().then(() => {
  const server = express();
 
  // Add your server configuration, middleware, etc.
 
  server.all('*', (req, res) => {
    return handle(req, res);
  });
 
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});