const { Router } = require("express");
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/tokenValidator");
const { getMessages } = require("../controllers/messages");

const router = Router();

router.get("/:from", validateJWT, getMessages);

module.exports = router;
