exports.getShop = (req, res, next) => {
    res.render('shop', {pageTitle: 'Shop', path: '/shop'});
};