import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from "./ToDoList";
import Navbar from "./Navbar";

class App extends React.Component{

    render(){
      return(
        <section id="todo">
          <ToDoList></ToDoList>
          <Navbar></Navbar>
                 </section>
                 );
     }
  }
  
  export default App;
  