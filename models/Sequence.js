const { Schema, model } = require("mongoose");

const sequenceSchema = new Schema(
  {
    notes: [String],
    drawingX: [Number],
    drawingY: [Number],
  },
  {
    timestamps: true,
  }
);

const Sequence = model("Sequence", sequenceSchema);

module.exports = Sequence;
