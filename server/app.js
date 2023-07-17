require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mysql = require("mysql2");

const port = 8006;

// Create a database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
   password: "root",
  database: "test",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


