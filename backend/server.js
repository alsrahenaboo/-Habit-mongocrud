const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const habitRoutes = require("./routes/habitRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/habits", habitRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

