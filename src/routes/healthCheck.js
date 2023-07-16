const express = require('express');

const router = express.Router();

router.get('/echo', (req, res) => {
    console.log('Received Echo');
    res.send('Recived Echo');
});

router.get('/healthcheck', (req, res) => {
    console.log('Received health check');
    res.send('Received Echo');
});

module.exports = router;
