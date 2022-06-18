const { Router } = require("express");
const { check } = require("express-validator");
const { createAccount, login, renew } = require("../controllers/auth");
const { validateField } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/tokenValidator");

const router = Router();

router.post(
  "/new",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("name", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("skin_id", "El tipo de piel (1-8) es obligatorio").not().isEmpty(),
    validateField,
  ],
  createAccount
);
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateField,
  ],
  login
);
router.get("/renew", validateJWT, renew);

module.exports = router;
