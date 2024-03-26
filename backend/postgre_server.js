const express = require("express");
const routerData = require("./postgres/routes")
const app = express()
const port = 3006
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("hello world")
})

app.use("/bikesData" , routerData);



app.listen(port, () => console.log(`port listening on ${port}`))

