module.exports = function(app) {
    app.get('/', (req, res) => {
        return res.render('index')

    })
    app.get('/layouts/register', (req, res) => {
        return res.render('register')

    })
}