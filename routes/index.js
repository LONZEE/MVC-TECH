module.exports = function(app) {
    app.get('/', (req, res) => {
        return res.render('index')

    })
    // Handle the registration form submission
app.post('/register', async (req, res) => {
    res.render('register');

    // Registration logic goes here...

    // After registering, redirect the user to the main page
    // res.redirect('/index');
});

// Load the main page
app.get('/main', (req, res) => {
    res.render('main');
});

}