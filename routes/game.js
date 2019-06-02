const express = require('express');
const router = express.Router();

// Test data
const survivors = [
    {name: 'Marty', activity: 'Repairing safehouse'},
    {name: 'Josh', activity: 'Exploring north'},
    {name: 'Lucia', activity: 'Cooking'}
];

router.get('/survivors', (req, res, next) => {
    res.render('survivors', {pageTitle: 'Survivors', path: '/survivors', survivors: survivors});
});

router.get('/inventory', (req, res, next) => {
    res.render('inventory', {pageTitle: 'Inventory', path: '/inventory', survivors: survivors});
});

router.get('/safehouse', (req, res, next) => {
    res.render('safehouse', {pageTitle: 'Safehouse', path: '/safehouse', survivors: survivors});
});

router.get('/shop', (req, res, next) => {
    res.render('shop', {pageTitle: 'Shop', path: '/shop', survivors: survivors});
});

router.get('/missions', (req, res, next) => {
    res.render('missions', {pageTitle: 'Missions', path: '/missions', survivors: survivors});
});

router.get('/explore', (req, res, next) => {
    res.render('explore', {pageTitle: 'Explore', path: '/explore', survivors: survivors});
});

router.use('/dashboard', (req, res, next) => {
    res.render('dashboard', {pageTitle: 'Dashboard', path: '/dashboard', survivors: survivors});
});

module.exports = router;