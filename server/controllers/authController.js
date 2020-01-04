const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res, next) => {
        const { email, password } = req.body;
        const foundUser = await req.app.get('db').get_user([email]);
        const user = foundUser[0];
        if(!user) {
            return res.status(401).send('User not found. Please register as a new user before logging in.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
            return res.status(401).send('Incorrect password.');
        }
        req.session.user = {
            id: user.id,
            email: user.email
        };
        return res.status(200).send(req.session.user);
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send('You have been logged out.');
    }
};