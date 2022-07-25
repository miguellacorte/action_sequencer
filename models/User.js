const { Schema, model, default: mongoose } = require("mongoose");
// const Sequence = require("../models/Sequence");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    location: {
      type: String,
    },
  },
  {
    composition: {
      notes: [String],
      drawingX: [Number],
      drawingY: [Number],
      timestamps: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
