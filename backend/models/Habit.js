const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  tags: [String],
  frequency: { type: String, required: true },
  progress: [
    {
      date: { type: Date, default: Date.now },
      completed: { type: Boolean, default: false },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Habit", HabitSchema);
