exports.getInventory = (req, res, next) => {
    res.render('inventory', {pageTitle: 'Inventory', path: '/inventory'});
};