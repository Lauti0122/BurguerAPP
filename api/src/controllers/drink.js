const {Drink} = require('../db')
const postDrink = async (req, res) => {
    const { name, price,images,size} = req.body;

    if (!name || !price || !images || !size) return res.status(400).json({ message: "Missing data" });

    const drinkExists = await Drink.findOne({ where: { name }});
    if (drinkExists) return res.status(400).json({ message: "Drink already exists" });
    try {
        const drinks = await Drink.create(req.body);
        return res.json(drinks);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getDrinks = async (req, res) => {
    const { name } = req.query;
    try {
        let drinks = await Drink.findAll();
        if (name) {
            const drinksByName = drinks.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (drinksByName.length > 0) {
                return res.json(drinksByName)
            }
            return res.status(400).json({ message: "Drink not found" });
        }
        return res.json(drinks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postDrink,
    getDrinks
}