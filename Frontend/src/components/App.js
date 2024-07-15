import { CreateTodo } from "./CreateTodo";
import react, { useState } from "react";
import ReactDom from "react-dom";
import { Todo } from "./Todo";
import { useState , useEffect} from "react";


const App=()=>{
    
    const [todos,setTodos]=useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
          try {
            const res = await fetch("http://localhost:3000/todos");
            const json = await res.json();
            setTodos(json.todos);
          } catch (error) {
            console.error("Error fetching todos:", error);
          }
        };
    
        fetchTodos();
      }, []);
    return (
        <div>
            <CreateTodo/>
            <Todo todos={todos}/>
        </div>
    )
};

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);