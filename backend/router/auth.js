const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login, renew } = require("../controllers/auth");
const { validateField } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/tokenValidator");

const router = Router();

router.post(
  "/new",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("name", "El nombre de usuario es obligatorio").not().isEmpty(),
    validateField,
  ],
  createUser
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
