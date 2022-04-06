const Message = require("../models/message");

const getMessages = async (req, res) => {
  const userID = req.uid;
  const messageFrom = req.params.from;

  const last30Messages = await Message.find({
    $or: [
      { from: userID, to: messageFrom },
      { from: messageFrom, to: userID },
    ],
  })
    .sort({ createdAt: "asc" })
    .limit(30);

  res.json({
    ok: true,
    messages: "hola",
    last30Messages,
  });
};

module.exports = {
  getMessages,
};
