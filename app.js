const express = require('express');
const app = express();
const port = 8083;

app.get('/', (req, res) => res.send('Hello World from Chile!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
