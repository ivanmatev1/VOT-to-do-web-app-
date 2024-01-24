import express from "express"
import cors from "cors";
import taskRouter from "./task-router.js"

const app = express()

app.use(cors());
app.use("/tasks", taskRouter)
app.use(express.json())

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong")
})

app.listen(3000, () =>{
    console.log("prosto neshto")
})