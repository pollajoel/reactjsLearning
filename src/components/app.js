import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from "./ToDoList"
import Navbar from "./Navbar"
import AddTask from "./AddTask"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import initialData from "../initialData"

class App extends React.Component{

    state={
        tache:initialData,
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
            id:
        }
    }


    render(){
      return(
        <section id="todo">
            <BrowserRouter>
                <Switch>
                    <Route path="/add-task" component={AddTask}></Route>
                    <Route path="/:filter?" render={(props)=> <ToDoList{...props} taches={this.state.tache} onToggleCompleted={this.onToggleCompleted}/> }></Route>
                </Switch>
                <Navbar></Navbar>
            </BrowserRouter>
          
                 </section>
                 );
     }
  }
  
  export default App;
  