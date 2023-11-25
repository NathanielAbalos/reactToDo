import {useState} from "react";

function Form(){
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    let taskList=[];

    const addTask = function(e){
        setTasks([...tasks, taskInput]);
        setTaskInput("");
    }

    const removeTask = function(index){
        tasks.splice(index, 1);
        setTasks([...tasks]);
        setTaskInput("");
    }

    const handleKey = function(e){
        if(e.code==="Enter"){
            addTask();
        }
    }

    return(
        <div className="toDoForm">  
            <h1>To Do List</h1>
            <input type="text" placeholder="Enter Task" value={taskInput} onChange={(e)=>setTaskInput(e.target.value)} onKeyUp={(e)=>handleKey(e)}></input>
            <button type="button" onClick={(e)=>addTask(e)}>Add Task</button>
            <div className="taskList">
                <ul>
                    {tasks.map((task, index)=>{
                        return <li>
                                   {task}
                                   <div className="buttonsBox">
                                   <button type="button" onClick={()=>removeTask(index)}>x</button>
                                   <input type="checkbox"></input>
                                   </div>
                               </li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Form;