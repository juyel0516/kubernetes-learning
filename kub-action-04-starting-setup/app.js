const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Latest image pull declarative approach!</h1>
    <p>This is new build imperative approach</p>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
