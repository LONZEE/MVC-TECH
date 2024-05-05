const bcrypt = require('bcrypt');

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Fetch the user from the database
    const user = await getUserFromDatabase(username);
    if (!user) {
        return res.status(400).send('Invalid username or password.');
    }
    // Compare the submitted password with the hashed password in the database
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid username or password.');
    }
    // User is authenticated
    res.send('Logged in!');
});