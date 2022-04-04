const { response } = require("express");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");
const User = require("../models/user");

const createUser = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        ok: false,
        message: "User already exist",
      });
    }
    const user = new User({ name, email, password });
    // encrypt password
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(password, salt);
    await user.save();

    // Generate JWT
    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    throw new Error(error);
    res.status(500).json({
      ok: false,
      message: "Unexpected error",
    });
  }
};

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const validPassword = await bcrypt.compareSync(password, user.password);

    if (!user || !validPassword) {
      return res.status(400).json({
        ok: false,
        message: "User or password incorrect",
      });
    }

    // Generate JWT
    const token = await generateJWT(user.id);
    res.json({
      ok: true,
      user: user,
      token,
    });
  } catch (error) {
    throw new Error(error);
    res.status(500).json({
      ok: false,
      message: "Unexpected error",
    });
  }
};

const renew = async (req, res = response) => {
  const { uid } = req;

  const token = await generateJWT(uid);
  const user = await User.findById(uid);

  res.json({
    ok: true,
    token,
    user: user,
  });
};

module.exports = {
  createUser,
  login,
  renew,
};
