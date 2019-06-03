exports.getMissions = (req, res, next) => {
    res.render('missions', {pageTitle: 'Missions', path: '/missions'});
};