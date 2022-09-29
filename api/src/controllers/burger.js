const {Burger} = require("../db");

const postBurger = async (req, res) => {
    const { name, price, description,images} = req.body;

    if (!name || !price || !description || !images) return res.status(400).json({ message: "Missing data" });

    const burgerExists = await Burger.findOne({ where: { name }});
    if (burgerExists) return res.status(400).json({ message: "Burger already exists" });
    try {
        const burgers = await Burger.create(req.body);
        return res.json(burgers);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getBurgers = async (req, res) => {
    const { name } = req.query;
    try {
        let burgers = await Burger.findAll();
        if (name) {
            const burgersByName = burgers.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (burgersByName.length > 0) {
                return res.json(burgersByName)
            }
            return res.status(400).json({ message: "Burger not found" });
        }
        return res.json(burgers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postBurger,
    getBurgers
}