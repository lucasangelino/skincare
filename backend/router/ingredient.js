const { Router } = require("express");
const { getIngredientId, getIngredients, getIngredientOverview, compareIngredients } = require("../controllers/ingredient");

const router = Router();

router.get(
  "/get",
  [], 
  getIngredients
);

router.get(
  "/get/:id",
  [], 
  getIngredientId
);

router.get(
  "/compare",
  [],
  compareIngredients
);

router.get(
  "/overview",
  [], 
  getIngredientOverview
);

module.exports = router;
