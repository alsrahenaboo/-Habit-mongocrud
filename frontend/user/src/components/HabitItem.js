
import React from "react";
import { Link } from "react-router-dom";
import { deleteHabit, updateHabit } from "../api";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const HabitItem = ({ habit, onUpdate }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this habit?")) {
      try {
        await deleteHabit(habit._id);
        onUpdate();
      } catch (error) {
        console.error("Error deleting habit:", error);
      }
    }
  };

  const handleToggleComplete = async () => {
    try {
      await updateHabit(habit._id, { completed: !habit.completed });
      onUpdate();
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {habit.name}
        </Typography>
        <Typography variant="body2">{habit.description}</Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {habit.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tags: {habit.tags.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Frequency: {habit.frequency}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {habit.completed ? "Completed" : "Not Completed"}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleComplete}
        >
          {habit.completed ? "Mark as Not Completed" : "Mark as Completed"}
        </Button>
        <Button variant="outlined" component={Link} to={`/edit/${habit._id}`}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default HabitItem;