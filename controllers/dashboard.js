// Test data
const survivors = [
    {name: 'Marty', activity: 'Repairing safehouse'},
    {name: 'Josh', activity: 'Exploring north'},
    {name: 'Lucia', activity: 'Cooking'}
];

exports.getDashboard = (req, res, next) => {
    res.render('dashboard', {pageTitle: 'Dashboard', path: '/dashboard', survivors: survivors});
};