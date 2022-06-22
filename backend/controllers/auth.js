const { response } = require("express");
const { generateJWT } = require("../helpers/jwt");
const accountRepository = require("../db/repository/accountrepository");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {

    const account = await accountRepository.getAccount(email);
    if (!account) { 
      return res.status(400).json({
        ok: false,
        message: "User or password incorrect",
      });
    }

    //const validPassword = bcrypt.compareSync(password, account.getPassword());
    const validPassword = password == account.getPassword();
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: "User or password incorrect",
      });
    }

    // Generate JWT
    const token = await generateJWT(account.id);
    return res.json({
      ok: true,
      user: account,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Unexpected error",
    });
  }
};

const renew = async (req, res = response) => {
  const { uid } = req;

  const token = await generateJWT(uid);
  const user = await accountRepository.getAccountById(uid);

  return res.json({
    ok: true,
    token,
    user: user,
  });
};

module.exports = {
  login,
  renew,
};
