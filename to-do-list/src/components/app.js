import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaListAlt,FaCheckSquare,FaPlusSquare,FaTrash} from 'react-icons/fa';

class App extends React.Component{

    render(){
      return(
        <section id="todo">
          <h1 className="m-3">Liste de tâches</h1>
          <ul className="list-group-item m-3">
            <li className="list-group-item d-flex align-items-center">Ranger La vaisselle
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">Repondre appels d'offres
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
             </li>
             <li className="list-group-item d-flex align-items-center">Signer contrat
             <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
             </li>
             <li className="list-group-item d-flex align-items-center">Ranger le salon
             <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
             </li>
             </ul>
             <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
               <div className="btn-group">
                 <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt/></a>
                 <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare/></a>
                 <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare/></a>
                 </div>
                 <button className="btn btn-outline-dark bg-light"><FaTrash/></button>
                 </footer>
  
                 </section>
                 );
     }
  }
  
  export default App;
  