const db = require('./config/db');
const express = require('express');
const app = express();
const port = 3001   




db.then(() => {app.listen(port, () => {
    console.log(`Server on ${port}`);
})});