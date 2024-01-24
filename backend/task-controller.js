import pool from "./database.js"

export async function getTasks(){
    const [tasks] = await pool.query("SELECT * FROM tasks")
    return tasks
}

export async function insertTask(task){
    const result = await pool.query(
        "INSERT INTO tasks(task) VALUES(?)", [task])
    return result
}

export async function deleteTask(id){
    const result = await pool.query(
        "DELETE FROM tasks Where id = ?", [id])
    return result
}

