const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./src/config/db");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
