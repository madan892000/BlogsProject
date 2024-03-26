const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"UserLogData"
})

db.connect(err => {
    if (err){
        console.log(err)
    }
    console.log("MySQL connected");
})

app.get("/sendata", (req,res) => {
    const sql = "create table userDetail (name varchar(250) , username varchar(250) unique , password varchar(250) unique)"
    db.query(sql, err => {
        if (err){
            console.log(err)
        }
        res.send("table created");
    })
})

app.post("/postData", (req, res) => {
    const { name, username, password } = req.body;
    console.log(req.body);

    const sql = "INSERT INTO userDetail SET ?";
    const values = { name, username, password };

    db.query(sql, values, (err, result) => {
        if (err) {
            // Check if the error is due to duplicate entry
            if (err.code === 'ER_DUP_ENTRY') {
                console.error('Duplicate entry error:', err.sqlMessage);
                res.status(400).send(JSON.stringify('Username or password already exists.'));
            } else {
                // Handle other errors
                console.error('Error:', err);
                res.status(500).send(JSON.stringify('Internal server error.'));
            }
        } else {
            console.log("Data inserted successfully.");
            res.status(200).send(JSON.stringify('Data inserted successfully.'));
        }
    });
});


app.get("/getuserdata" , (req,res) => {
    let sql = "select * from userDetail"
    db.query(sql,(err,result) => {
        if (err){
            res.send(JSON.stringify("Error"));
        }
        res.send(result)
    })
})

app.get('/createDatabase', (req, res) => {
    const databaseName = "UserLogData"; 
  
    // Create the database
    db.query(`CREATE DATABASE ${databaseName}`, (err, result) => {
      if (err) {
        console.error('Error creating database:', err);
        res.status(500).send('Error creating database');
        return;
      }
      console.log('Database created successfully');
      res.status(200).send('Database created successfully');
    });
  });

app.post("/checkData" , (req,res) => {
    const sql = 'SELECT * FROM userDetail WHERE username = ? AND password = ?';
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password)
    db.query(sql,[username,password] , (error,result,fields) => {
        if (error){
            res.send(JSON.stringify("Error"));
        }
        console.log(result)
        if (result.length < 1){
            res.send(JSON.stringify("failed"))
            console.log("failed")
        }
        else{
            console.log(result);
            res.send(JSON.stringify(result))
        }
    })
    
});


app.listen(3001, () => console.log("server started"));