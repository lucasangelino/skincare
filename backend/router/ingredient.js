const { Router } = require("express");
const { getIngredientId, getIngredients, getIngredientOverview, compareIngredients } = require("../controllers/ingredient");
const { check, param } = require("express-validator");
const { validateField } = require("../middlewares/fieldValidator");

const router = Router();

router.get(
  "/get",
  [
    check("name", "El nombre del ingrediente es obligatorio.").not().isEmpty(),
    validateField
  ],
  getIngredients
);

router.get(
  "/get/:id",
  [
    param("id", "El :id del ingrediente es obligatorio.").not().isEmpty(),
    validateField
  ], 
  getIngredientId
);

router.get(
  "/compare",
  [
    check("ingredient_ids", "Los dos ingredientes a comparar son obligatorios").not().isEmpty(),
    validateField
  ],
  compareIngredients
);

router.get(
  "/overview",
  [], 
  getIngredientOverview
);

module.exports = router;
