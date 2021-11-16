const router = require("express").Router();
const superHeroRouter = require("./superHeroRouter");

router.use("/superhero", superHeroRouter);

module.exports = router;
