const Joi = require('joi');
const products = require('./routes/products');
const express = require('express');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/products', products);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}...`));