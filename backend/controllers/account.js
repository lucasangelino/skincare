const { response } = require("express");
const accountRepository = require("../db/repository/accountrepository");
const { generateJWT } = require("../helpers/jwt");
const errors = require('../common/error')

const createAccount = async (req, res = response) => {
  try {
    const { email, password, name, skin_id } = req.body;
    let account = await accountRepository.getAccount(email);
    if (account != null) {
      return res.status(400).json({
        ok: false,
        message: "Account already exist",
      });
    }

    //let encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    account = await accountRepository.createAccount(email, password, name, skin_id);

    // Generate JWT
    const token = await generateJWT(account.getId());

    return res.json({
      ok: true,
      account,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Unexpected error",
    });
  }
};

const updateSkin = async (req, res = response) => {
  try {
    const { account_id, skin_id } = req.body;
    let account = await accountRepository.updateSkin(account_id, skin_id);
    if (account == null) {
      return res.status(404).json({
        ok: false,
        message: errors.ACCOUNT_NOT_EXIST,
      });
    }
    return res.json({
      ok: true,
      account
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: errors.UNEXPECTED_ERROR,
    });
  }
};

module.exports = {
  createAccount,
  updateSkin
};
