const { Superhero } = require("../models");

module.exports.createSuperhero = async (req, res, next) => {
    try {
        const { body } = req;
        const newSuperHero = await Superhero.create(body);

        res.send(newSuperHero);
        
    } catch (error) {
        next(error)
    }
};  