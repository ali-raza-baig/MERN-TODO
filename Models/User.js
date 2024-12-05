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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
