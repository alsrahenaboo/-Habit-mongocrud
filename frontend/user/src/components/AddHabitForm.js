
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createHabit } from "../api";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const AddHabitForm = () => {
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    category: "",
    tags: "",
    frequency: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHabit({
        ...habit,
        tags: habit.tags.split(",").map((tag) => tag.trim()),
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating habit:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add New Habit
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Habit Name"
          name="name"
          value={habit.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          value={habit.description}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <FormControl fullWidth required>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={habit.category}
            onChange={handleChange}
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="productivity">Productivity</MenuItem>
            <MenuItem value="mindfulness">Mindfulness</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Tags (comma-separated)"
          name="tags"
          value={habit.tags}
          onChange={handleChange}
          fullWidth
        />
        <FormControl fullWidth required>
          <InputLabel>Frequency</InputLabel>
          <Select
            name="frequency"
            value={habit.frequency}
            onChange={handleChange}
          >
            <MenuItem value="">Select Frequency</MenuItem>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </Container>
  );
};

export default AddHabitForm;