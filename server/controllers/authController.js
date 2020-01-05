const bcrypt = require('bcryptjs');

module.exports = {
    addUser: async (req, res, next) => {
        const { is_admin, role, first_name, last_name, phone_number, email_address, password } = req.body;
        const db = req.app.get('db');
        const result = await db.get_user(email_address);
        const existingUser = result[0];
        if(existingUser) {
            return res.status(409).send('Email is already in use.')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const addedUser = await db.add_user(is_admin, role, first_name, last_name, phone_number, email_address, hash);
        const user = addedUser[0];
        req.session.user = {
            id: user.id,
            email_address: user.email_address
        };
        return res.status(200).send(req.session.user)
    },
    login: async (req, res, next) => {
        const { email_address, password } = req.body;
        const foundUser = await req.app.get('db').get_user([email_address]);
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
            email_address: user.email_address
        };
        return res.status(200).send(req.session.user);
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send('You have been logged out.');
    }
};