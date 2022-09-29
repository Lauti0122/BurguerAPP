const {Chips} = require('../db')
const postChips = async (req, res) => {
    const { name, size, images} = req.body;

    if (!name || !size || !images) return res.status(400).json({ message: "Missing data" });

    const chipsExists = await Chips.findOne({ where: { name}});
    if (chipsExists) return res.status(400).json({ message: "Chips already exists" });
    try {
        const chips = await Chips.create(req.body);
        return res.json(chips);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}


const getChips = async (req, res) => {
    const { name } = req.query;
    try {
        let chips = await Ingredients.findAll();
        if (name) {
            const chipsByName = chips.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (chipsByName.length > 0) {
                return res.json(chipsByName)
            }
            return res.status(400).json({ message: "Chips not found" });
        }
        return res.json(chips);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports ={
    postChips,
    getChips
}