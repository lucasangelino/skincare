const { Router } = require("express");
const { getIngredientId, getIngredients, getIngredientOverview } = require("../controllers/ingredient");

const router = Router();

router.get(
  "/get",
  [], // TODO: add validations
  getIngredients
);

router.get(
  "/get/:id",
  [], // TODO: add validations
  getIngredientId
);

router.get(
  "/overview",
  [], // TODO: add validations
  getIngredientOverview
);

module.exports = router;
