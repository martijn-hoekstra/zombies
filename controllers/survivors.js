// Test data
const survivors = [
    {name: 'Marty', activity: 'Repairing safehouse'},
    {name: 'Josh', activity: 'Exploring north'},
    {name: 'Lucia', activity: 'Cooking'}
];

exports.getSurvivors = (req, res, next) => {
    res.render('survivors', {pageTitle: 'Survivors', path: '/survivors', survivors: survivors});
};