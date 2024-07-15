const express =require("express");
const { createTodo, updateTodo}=require("./type");
const { todo } = require("./db");
const app=express();
const cors=require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
    const createPayLoad=req.body;
    const parsedPayLoad=createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You sent the wrong user inputs",
        })
        return;
    }

    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    });

    res.json({
        msg:"Todo created"
    });

});

 app.get("/todos",async (req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
 });

 app.put("/completed",async (req,res)=>{
    const updatePayLoad=req.body;
    const parsedPayLoad=updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        });
        return;
    }  

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo updated"
    })
 });
  
 app.listen(3000,()=>{
    console.log("server running");
 });




