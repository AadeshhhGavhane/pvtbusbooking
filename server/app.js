const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hello",
  database: "pvtbookings",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/storeuserdata", (req, res) => {
  const { ticketId, from, to, date, journeyType, email } = req.body;

  const checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE user_email = '${email}'`;
  const insertQuery = `INSERT INTO user (user_email) SELECT '${email}' WHERE NOT EXISTS (SELECT 1 FROM user WHERE user_email = '${email}')`;
  const values = [ticketId, from, to, date, journeyType];

  db.query(checkEmailQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error checking email existence in the database");
      return;
    }

    const count = result[0].count;

    if (count === 0) {
      // Email doesn't exist, perform the insert operation to add email to user table
      db.query(insertQuery, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error inserting email into the database");
          return;
        }

        // Insert user details into temp table
        const query =
          "INSERT INTO temp (ticket_id, `from`, `to`, `date`, journey_type, user_email) VALUES (?, ?, ?, ?, ?, ?)";
        const valuesWithUserEmail = [...values, email];

        db.query(query, valuesWithUserEmail, (error, results) => {
          if (error) {
            console.error("Error executing MySQL query: ", error);
            res.status(500).send("Error inserting data into the database");
            return;
          }

          console.log("Data inserted successfully!");
          res.sendStatus(200);
        });
      });
    } else {
      // Email already exists, insert user details into temp table
      const query =
        "INSERT INTO temp (ticket_id, `from`, `to`, `date`, journey_type, user_email) VALUES (?, ?, ?, ?, ?, ?)";
      const valuesWithUserEmail = [...values, email];

      db.query(query, valuesWithUserEmail, (error, results) => {
        if (error) {
          console.error("Error executing MySQL query: ", error);
          res.status(500).send("Error inserting data into the database");
          return;
        }

        console.log("Data inserted successfully!");
        res.sendStatus(200);
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
