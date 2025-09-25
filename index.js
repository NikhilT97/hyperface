let express = require("express")
import "./db.json"
let app = express();


app.use(express.json())


app.get("/", async(req, res)=> {

   await res.status(200).send("Home page")
    
})


let taskStored = db.json;

app.post("/create", async(req,res)=> {

    let body = req.body()

    await res.status(200).json({message:"Task is created", data: body })
    
})

app.get("/tasks", async(req,res) => {
    
    await res.status(200).json({message: "List of tasks", data: taskStored })

})

app.delete("/delete", async(req,res) => {
    let id = req.body()
    
    if(taskStored.taskId === id){
        await res.status(200).json({message: "Task Deleted successfully", data: taskStored})
    }
    else{
        await res.status(200).json({message: "no task found"})
    }

})

let PORT = 2000;

app.listen(PORT, ()=> {
    console.log(`the server is running on ${PORT}`)
})

