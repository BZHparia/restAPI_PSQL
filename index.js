const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json())

// Get patients
app.get("/patients", async(req,res) => {
    try {
        const allPatients = await pool.query("SELECT * FROM patients");
        res.json(allPatients.rows);
    } catch(err) {
        console.log(err.message);
    }
})

// Post patients
app.post("/patients", async(req,res) => {
    try {
        const { description } = req.body;
        console.log(req.body);
        console.log("-----------");
        console.log(description);
        // const newPatient = await pool.query(
        //     "INSERT INTO patients (description) VALUES ($1) RETURNING *", 
        //     [description]);
        
        // res.json(newPatient.rows[0]);
    } catch(err) {
        console.log(err.message);
    }
})


app.listen(8080, () => {
    console.log("READY");
});
