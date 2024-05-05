const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://edalopez90:OqAhnHT9k513mgvC@mvctech.npj45oq.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// Handlebars Middleware
app.engine('hbs', exphbs.engine(
    {
       extname: '.hbs',
    }
));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes/index');
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});