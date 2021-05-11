// Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
