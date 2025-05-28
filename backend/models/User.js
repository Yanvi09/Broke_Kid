const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profession: { type: String },
  goal: { type: String },
  workTime: { type: String },
  sleepTime: { type: String },
  budget: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
