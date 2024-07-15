const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://kaarthikeyanr2:ooqDiIvuZvxDZuv5@cluster0.dfujrz6.mongodb.net/todos");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo=mongoose.model("todos",todoSchema);

module.exports={
    todo
}