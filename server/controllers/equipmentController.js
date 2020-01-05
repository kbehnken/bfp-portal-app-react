module.exports = {
    getEquipment: async (req, res, net) => {
        const db = req.app.get('db');
        const userequipment = await db.get_equipment([req.session.user.id]);
        return res.status(200).send(userequipment);
    },
    addEquipment: async (req, res, next) => {
        const { name, description } = req.body;
        const { id } = req.session.user;
        const db = req.app.get('db');
        const equipment = await db.add_equipment([name, description, id]);
        return res.status(200).send(equipment);
    },
    deleteEquipment: (req, res, next) => {
        const { id } = req.params;
        const db = req.app.get("db");
        db.delete_equipment(id)
        .then((equipment) => {
            res.status(200).send(equipment)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."});  
            console.log(err);
        });
    }
};