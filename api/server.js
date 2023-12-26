require('dotenv').config();
require('./db');

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors());

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});