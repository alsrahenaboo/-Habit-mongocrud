
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import EditHabitForm from "./components/EditHabitForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Daily Habit Tracker</h1>
        <Routes>
          <Route path="/" element={<HabitList />} />
          <Route path="/add" element={<AddHabitForm />} />
          <Route path="/edit/:id" element={<EditHabitForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;