exports.getSafehouse = (req, res, next) => {
    res.render('safehouse', {pageTitle: 'Safehouse', path: '/safehouse'});
};