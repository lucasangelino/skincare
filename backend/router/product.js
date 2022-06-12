const { Router } = require("express");
const { getProductId, getProducts, compareProducts, getProductsByNameLike } = require("../controllers/product");

const router = Router();

router.get(
  "/get",
  [],
  getProducts
);

router.get(
  "/get/:id",
  [],
  getProductId
);

router.get(
  "/compare",
  [],
  compareProducts
);

module.exports = router;
