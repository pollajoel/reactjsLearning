import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from "./ToDoList";
import Navbar from "./Navbar";
import AddTask from "./AddTask";
import {BrowserRouter,Switch,Route} from 'react-router-dom';


class App extends React.Component{

    render(){
      return(
        <section id="todo">
            <BrowserRouter>
                <Switch>
                    <Route path="/add-task" component={AddTask}></Route>
                    <Route path="/:filter?" component={ToDoList}></Route>
                </Switch>
                <Navbar></Navbar>
            </BrowserRouter>
          
                 </section>
                 );
     }
  }
  
  export default App;
  