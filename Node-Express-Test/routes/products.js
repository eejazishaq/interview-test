const express = require('express');
const router = express.Router();

var request = require('request');

router.get('/', (req, res) => {
  request('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6', function(error, response, body) {
        // res.json(body)
        res.send(body);
    });
});


module.exports = router;