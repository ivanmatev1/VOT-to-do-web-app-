import express from "express"
import { getTasks, insertTask, deleteTask } from "./task-controller.js"

const router = express.Router()
router.use(express.json())

router.get("", async(req,res) => {
    const tasks = await getTasks()
    res.status(202).send(tasks)
})

router.post("", async(req,res) =>{
    const {task} = req.body
    const result = await insertTask(task)
    res.status(201).send(result)
})

router.delete("/:id", async(req,res) =>{
    const id = req.params.id
    const result = await deleteTask(id)
    res.status(200).send(result)
})

export default router