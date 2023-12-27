require('dotenv').config();
require('./db');

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const mailerUtil = require('./mailer');
  
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/contact', async(req, res) => {
    console.log(req.body);

    mailerUtil
    .sendEmailContact(req.body.email, 'Raavi Resort - Thank you for reaching out!', 'contact', req.body.name)
    .catch(console.error);

    mailerUtil
    .sendEmailContactSelf('Raavi Resort - New Message from Website', 'contactSelf', req.body)
    .catch(console.error);

    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});