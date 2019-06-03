exports.getExplore = (req, res, next) => {
    res.render('explore', {pageTitle: 'Explore', path: '/explore'});
};