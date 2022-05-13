'use strict';
const express = require('express');
const app = express();
const host = 'localhost';
const port = 8081;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
    console.log(`Press 'Ctrl+C' to shutdown server`);
});