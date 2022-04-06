const User = require("../models/user");
const Message = require("../models/message");

const userConnected = async (uid) => {
  const user = await User.findOne({ _id: uid });
  user.online = true;
  await user.save();
  return user;
};

const userDisconnected = async (uid) => {
  const user = await User.findOne({ _id: uid });
  user.online = false;
  await user.save();
  return user;
};

const getUsers = async () => {
  const users = await User.find().sort("-online");

  return users;
};

const saveMessage = async (message) => {
  try {
    const newMessage = new Message({
      ...message,
      content: message.message.trim(),
    });
    await newMessage.save();
    return newMessage;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  userConnected,
  userDisconnected,
  getUsers,
  saveMessage,
};
