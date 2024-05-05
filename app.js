const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs.engine(
    {
       extname: '.hbs',
    }
));
app.set('view engine', 'handlebars');


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});