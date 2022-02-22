const { Schema, model } = require("mongoose");

const UserShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  online: {
    type: Boolean,
    required: true,
    default: false,
  },
  lastLogin: {
    type: Date,
  },
});

UserShema.methods.toJSON = function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("User", UserShema);
