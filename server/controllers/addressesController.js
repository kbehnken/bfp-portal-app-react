module.exports = {
    getAddresses: async (req, res, next) => {
        const db = req.app.get('db');
        const addresses = await db.get_service_addresses();
        return res.status(200).send(addresses);
    },
    getUserAddresses: async (req, res, next) => {
        const db = req.app.get('db');
        const userAddresses = await db.get_user_service_addresses([req.session.user.id]);
        return res.status(200).send(userAddresses);
    },
    addAddress: async (req, res, next) => {
        const { streetAddress, city, state, postalCode, userId, mapUrl } = req.body;
        const { id } = req.params;
        const db = req.app.get('db');
        const address = await db.add_address([streetAddress, city, state, postalCode, userId, mapUrl, id]);
        return res.status(200).send(address);
    },
    updateAddress: async (req, res, next) => {
        const { streetAddress, city, state, postalCode, userId, mapUrl } = req.body;
        const { id } = req.params;
        const db = req.app.get("db");
        const address = await db.update_address([streetAddress, city, state, postalCode, userId, mapUrl]);
        return res.status(200).send(address);
    },
    deleteAddress: (req, res, next) => {
        const { id } = req.params;
        const db = req.app.get("db");
        db.delete_address(id)
        .then((address) => {
            res.status(200).send(address)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."});  
            console.log(err);
        });
    }
};