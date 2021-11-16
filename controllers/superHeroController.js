const { Superhero, Superpower } = require("../models");

module.exports.createSuperhero = async (req, res, next) => {
    try {
        const { body } = req;
        const newSuperHero = await Superhero.create(body);
        const superPower = await Superpower.create({superpower: body.superpowers});
newSuperHero.addSuperpower(superPower)
        res.send({data:{newSuperHero, superPower}});
        
    } catch (error) {
        next(error)
    }
};  