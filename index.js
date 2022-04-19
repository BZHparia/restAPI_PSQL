const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json())


app.post("/todos", async(req,res) => {
    
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *", 
            [description]);
        
        res.json(newTodo);
        console.log(res);
    } catch(err) {
        console.log(err.body);
    }
})


app.listen(5000, () => {
    console.log("READY");
});
