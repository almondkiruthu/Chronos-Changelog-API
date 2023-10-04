const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Hello from epress');
  res.json({ message: 'Hello World' });
});

module.exports = app;
