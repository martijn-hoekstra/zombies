const express = require('express');
const router = express.Router();

router.get('/survivors', (req, res, next) => {
    res.send(`<h1>Survivors</h1>`);
});

router.get('/inventory', (req, res, next) => {
    res.send(`<h1>Inventory</h1>`);
});

router.get('/safehouse', (req, res, next) => {
    res.send(`<h1>Safehouse</h1>`);
});

router.get('/missions', (req, res, next) => {
    res.send(`<h1>Mission</h1>`);
});

router.get('/explore', (req, res, next) => {
    res.send(`<h1>Explore</h1>`);
});

router.use('/', (req, res, next) => {
    res.send(`<h1>Home</h1>`);
});

module.exports = router;