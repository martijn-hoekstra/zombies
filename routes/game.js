const express = require('express');
const router = express.Router();

// import controllers
const dashboardController = require('../controllers/dashboard');
const survivorsController = require('../controllers/survivors');
const inventoryController = require('../controllers/inventory');
const safehouseController = require('../controllers/safehouse');
const shopController = require('../controllers/shop');
const missionsController = require('../controllers/missions');
const exploreController = require('../controllers/explore');

router.use('/dashboard', dashboardController.getDashboard);
router.get('/survivors', survivorsController.getSurvivors);
router.get('/inventory', inventoryController.getInventory);
router.get('/safehouse', safehouseController.getSafehouse);
router.get('/shop', shopController.getShop);
router.get('/missions', missionsController.getMissions);
router.get('/explore', exploreController.getExplore);

module.exports = router;