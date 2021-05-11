// Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const session = require('express-session');
// const sequelize = require('./config/connection');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
// app.use(session(sess));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
// app.use(require('./controllers/dish-routes'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use('/', function (req, res) {
  res.send('Hello World');
});

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
