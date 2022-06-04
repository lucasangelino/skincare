const { Router } = require("express");
const { getProductId, getProducts } = require("../controllers/product");

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

module.exports = router;
