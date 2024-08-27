
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HabitItem from "./HabitItem";
import { getHabits } from "../api";
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Box,
} from "@mui/material";

const HabitList = () => {
  const [habits, setHabits] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const response = await getHabits();
      setHabits(response.data);
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  const filteredHabits = habits.filter(
    (habit) =>
      habit.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || habit.category === filter)
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Habits
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add"
        sx={{ mb: 2 }}
      >
        Add New Habit
      </Button>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <TextField
          label="Search habits"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: "60%" }}
        />
        <FormControl sx={{ width: "35%" }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="productivity">Productivity</MenuItem>
            <MenuItem value="mindfulness">Mindfulness</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {filteredHabits.map((habit) => (
          <Grid item xs={12} sm={6} md={4} key={habit._id}>
            <HabitItem habit={habit} onUpdate={fetchHabits} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HabitList;