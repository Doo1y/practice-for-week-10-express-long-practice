const express = require('express');
require('express-async-errors');

const app = express();

// serve static files from Express server:
// starting the url path with '/static' serves the 'assets' folder as the root
app.use('/static', express.static('assets'));

// parse the incoming body of the request as JSON
app.use(express.json());

// For testing purposes, GET 2/
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));