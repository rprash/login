var mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    // validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    trim: true,
  },
  confirmpassword: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zip: {
    type: Number,
    trim: true,
  },
  mobile: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
