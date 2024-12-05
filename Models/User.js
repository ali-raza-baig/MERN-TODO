const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 80,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
