// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require("mysql2");
// require("dotenv").config();

// const router = require("./routes/router")
// const port = 5000;

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "rutu",
//   database: "pvtbusbooking"
// });
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(router)

// app.listen(port,()=>{
//     console.log(`server start at port ${port}`)
// })

// app.post("/sendemail", (req, res) => {
//     const { email, name } = req.body;
//     let checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE user_email = '${email}'`;
//     let insertQuery = `INSERT INTO user (user_email, name) SELECT '${email}', '${name}' WHERE NOT EXISTS (SELECT 1 FROM user WHERE user_email = '${email}')`;
  
//     db.query(checkEmailQuery, (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error checking email existence in the database");
//         return;
//       }
  
//       const count = result[0].count;
  
//       if (count > 0) {
//         // Email already exists
//         res.send("Email already exists in the table");
//       } else {
//         // Email doesn't exist, perform the insert operation
//         db.query(insertQuery, (err, result) => {
//           if (err) {
//             console.log(err);
//             res.status(500).send("Error inserting data into the database");
//             return;
//           }
//           console.log(result);
//           res.send("Data inserted successfully");
//         });
//       }
//     });
//   });
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rutu",
  database: "pvtbusbooking"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendemail", (req, res) => {
  const { email, name, gender, dob, contact } = req.body;
  let checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE user_email = '${email}'`;
  let insertQuery = `INSERT INTO user (user_email, name, gender, DOB, contact_no) SELECT '${email}', '${name}', '${gender}', '${dob}', '${contact}' WHERE NOT EXISTS (SELECT 1 FROM user WHERE user_email = '${email}')`;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});