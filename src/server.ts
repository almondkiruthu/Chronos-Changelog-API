import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Hello from epress');
  res.json({ message: 'Hello World' });
});

export default app;
