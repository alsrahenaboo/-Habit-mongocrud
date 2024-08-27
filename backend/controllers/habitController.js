const Habit = require("../models/Habit");

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHabit = async (req, res) => {
  const habit = new Habit(req.body);
  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHabitById = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found" });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedHabit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.json(updatedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
