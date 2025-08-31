const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors()),
    app.use(express.json());

// Simple MySQL connection
const connection = mysql.createConnection({
    host: "172.26.32.1",
    user: "dbadm",
    password: "P@ssw0rd",
    database: "cars"
});

connection.connect(err => {
    if (err) {
        console.error("DB connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL!");
});

// Home route
app.get("/", (req, res) => {
    res.send("Hello from backend!");
});

// SQL Queries
const get_all_cars = "SELECT * FROM cars;"

// Api to get all cars
app.get("/api/cars", (req, res) => {
    connection.query(get_all_cars, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return
        }
        res.json(results)
    });
});

// Api to create a car
const postSql = "INSERT INTO cars (model, year) VALUES(?,?)";
app.post('/api/cars',
    (req, res) => {
        const { model, year } = req.body
        connection.query(postSql, [model, year], (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return
            }
            res.json({ id: results.insertId, model, year });
        });
    })

app.listen(port, () => {
    console.log("Server listening at http://localhost:" + port)
});