const { Router } = require("express");
const { check } = require("express-validator");
const { login, renew } = require("../controllers/auth");
const { validateField } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/tokenValidator");

const router = Router();

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateField,
  ],
  login
);

router.get(
  "/renew",
  validateJWT,
  renew
);

module.exports = router;
