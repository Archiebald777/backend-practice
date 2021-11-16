const superHeroRouter = require("express").Router();
const superHeroController = require("../controllers/superHeroController");

superHeroRouter.post('/', superHeroController.createSuperhero);

module.exports = superHeroRouter;