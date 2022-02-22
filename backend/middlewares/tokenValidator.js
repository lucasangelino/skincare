const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "Unauthotize",
      });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = payload.uid;

    next();
  } catch (error) {
    throw new Error(error);
    res.status(401).json({
      ok: false,
      message: "Invalid auth",
    });
  }
};

module.exports = {
  validateJWT,
};
