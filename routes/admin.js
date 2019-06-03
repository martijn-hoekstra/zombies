const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/admin/dashboard');

router.use('/', dashboardController.getDashboard);

module.exports = router;