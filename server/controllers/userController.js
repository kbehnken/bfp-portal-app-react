module.exports = {
    addUser: async (req, res, next) => {
        const { is_admin, role, first_name, last_name, phone_number, emailAddress, password } = req.body;
        const db = req.app.get("db");
        const result = await db.get_user(emailAddress);
        const existingUser = result[0];
        if(existingUser) {
            return res.status(409).send("Email is already in use.")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const addedUser = await db.add_user(is_admin, role, first_name, last_name, phone_number, emailAddress, hash);
        const user = addedUser[0];
        req.session.user = {
            id: user.id,
            emailAddress: user.email_address
        };
        return res.status(200).send(req.session.user)
    },
    
    getUsers: async (req, res, next) => {
        const db = req.app.get("db");
        const allUsers = await db.get_users();
        return res.status(200).send(allUsers);
    }
};