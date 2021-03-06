import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from "./ToDoList"
import Navbar from "./Navbar"
import AddTask from "./AddTask"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import initialData from "../initialData"
import uniqueid from 'uniqueid'
import Fetching from "./Fetching"

class App extends React.Component{

    state={
        tache:initialData,
        fetching:true,
    }
    
    onToggleCompleted=(TaskId)=>{
        let Tasktoupdate = this.state.tache.find(taskid=>taskid.id===TaskId)
        Tasktoupdate.completed = !Tasktoupdate.completed

        this.setState(prevState=>{prevState.tache.map(tache=>{
            return tache.id===TaskId?Tasktoupdate:tache
        })
    })

    }
    onAddTask=(NewtaskName)=>{
        let newTask={
            id:uniqueid(),
            name:NewtaskName,
            completed:false,
        }

        this.setState(prevstate=>({
            tache:[...prevstate.tache,newTask]

        })
        )
    }
OndeleteCompleted=()=>{
    this.setState(prevstate =>{
        let newstate =prevstate.tache.filter(task=>!task.completed)

        return { tache: newstate }
    } )
}

    render(){
      return(
        <section id="todo">
            {this.state.fetching? <Fetching/>:null}
            <BrowserRouter>
                <Switch>
                    <Route path="/add-task" render={(props)=><AddTask{...props} onAddTask={this.onAddTask}/>}></Route>
                    <Route path="/:filter?" render={(props)=> <ToDoList{...props} taches={this.state.tache} onToggleCompleted={this.onToggleCompleted}/> }></Route>
                </Switch>
                <Navbar OndeleteCompleted={this.OndeleteCompleted}/>
            </BrowserRouter>
          
                 </section>
                 );
     }
  }
  
  export default App;
  