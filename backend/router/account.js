const { Router } = require("express");
const { check } = require("express-validator");
const { createAccount, updateSkin } = require("../controllers/account");
const { validateField } = require("../middlewares/fieldValidator");

const router = Router();

router.post(
  "/create",
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
  "/update",
  [
    check("account_id", "Campo account_id es obligatorio.").not().isEmpty(),
    check("skin_id", "Campo skin_id (1-8) es obligatorio.").not().isEmpty(),
    validateField,
  ],
  updateSkin
);


module.exports = router;
