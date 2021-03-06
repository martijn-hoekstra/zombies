const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gameRoutes = require('./routes/game');
const adminRoutes = require('./routes/admin');
const errorController = require('./controllers/error');

const app = express();
app.set('view engine', 'pug'); // tells express what template engine to use, for dynamically compiling template files
app.set('views', 'views'); // where to find these templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(gameRoutes);

app.use(errorController.get404);

app.listen(3000);