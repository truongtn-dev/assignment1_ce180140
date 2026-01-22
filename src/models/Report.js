const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "resolved", "closed"],
      default: "closed",
    },
    project: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
