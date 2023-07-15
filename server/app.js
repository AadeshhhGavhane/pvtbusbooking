const bodyParser = require('body-parser');

const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "hello",
    database: "pvtbookings"
  });
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router")
const cors = require("cors")

const port = 8006;

app.use(express.json());
app.use(cors());
app.use(router)

app.listen(port,()=>{
    console.log(`server start at port ${port}`)
})

app.post("/emailsend", (req, res) => {
    const { email, name } = req.body;
    let checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE user_email = '${email}'`;
    let insertQuery = `INSERT INTO user (user_email, name) SELECT '${email}', '${name}' WHERE NOT EXISTS (SELECT 1 FROM driver WHERE email = '${email}')`;
  
    db.query(checkEmailQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error checking email existence in the database");
        return;
      }
  
      const count = result[0].count;
  
      if (count > 0) {
        // Email already exists
        res.send("Email already exists in the table");
      } else {
        // Email doesn't exist, perform the insert operation
        db.query(insertQuery, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error inserting data into the database");
            return;
          }
          console.log(result);
          res.send("Data inserted successfully");
        });
      }
    });
  });
