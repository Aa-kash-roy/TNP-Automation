"use strict";

const mongoose = require("mongoose");

const {
  Schema
} = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirm_password: {
    type: String,
    required: true
  },
  validated: {
    type: Boolean,
    default: false
  }
});
UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v; //do not reveal passwordHash

    delete returnedObject.password;
  }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;