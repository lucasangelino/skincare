const { Schema, model } = require("mongoose");

const ProductShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  components: {
    type: String,
    required: true,
  },
});

ProductShema.methods.toJSON = function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Product", ProductShema);
