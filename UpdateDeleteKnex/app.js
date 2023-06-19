const express = require('express')
const {updateAirline,deleteAirline} = require("./database/airlinesDb")

const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())





app.get("/", (req,res)=> {
    res.send("hello world")
})


app.put("/api/updateAirline", async (req, res)=> {
    try {
        const updatedAirline = req.body
        const result = await updateAirline(updatedAirline)
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
})


app.delete("/api/deleteAirline/:id", async (req,res)=> {
    try {
        const id = req.params.id
        const result = await deleteAirline(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
})





const port = 4001
app.listen(port , (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("app is running on port", port);
    }
})