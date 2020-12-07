import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from "./Todo"

const ToDoList= ({taches,match,onToggleCompleted})=>{
let filteredtasks
switch (match.params.filter) {
    case 'completed':
        filteredtasks = taches.filter(task=>task.completed);
        break;
        default:
            filteredtasks=taches
        break;
}
if( filteredtasks.length===0)
{
   return(
       <>
            <ul className="list-group-item m-3">
            <li className="list-group-item d-flex align-items-center">Aucune tâches à afficher</li>
            </ul>
        </>
);

}else{


return(
    <>
     <h1 className="m-3">Liste de tâches</h1>
<ul className="list-group-item m-3">
    {
        filteredtasks.map((tache)=><Todo task={tache} key={tache.id} onToggleCompleted={onToggleCompleted}/>)
        
    }
</ul>
</>);
}

}

export default ToDoList;