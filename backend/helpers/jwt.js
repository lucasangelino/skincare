const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: uid };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) {
          throw new Error(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyJWT = (token = "") => {
  try {
    const { uid: uid } = jwt.verify(token, process.env.JWT_SECRET);
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};

module.exports = {
  generateJWT,
  verifyJWT,
};
