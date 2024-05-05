const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Handlebars Middleware
app.engine('hbs', exphbs.engine(
    {
       extname: '.hbs',
    }
));
app.set('view engine', 'hbs');

var routes = require('./routes/index');
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});