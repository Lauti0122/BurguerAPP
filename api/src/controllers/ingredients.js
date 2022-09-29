const {Ingredients} = require('../db')
const postIngredients = async (req, res) => {
    const { name} = req.body;

    if (!name) return res.status(400).json({ message: "Missing data" });

    const ingredientExists = await Ingredients.findOne({ where: { name }});
    if (ingredientExists) return res.status(400).json({ message: "Ingredient already exists" });
    try {
        const ingredients = await Ingredients.create(req.body);
        return res.json(ingredients);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}


const getIngredients = async (req, res) => {
    const { name } = req.query;
    try {
        let ingredients = await Ingredients.findAll();
        if (name) {
            const ingredientsByName = ingredients.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (ingredientsByName.length > 0) {
                return res.json(ingredientsByName)
            }
            return res.status(400).json({ message: "Ingredients not found" });
        }
        return res.json(ingredients);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports ={
    postIngredients,
    getIngredients
}