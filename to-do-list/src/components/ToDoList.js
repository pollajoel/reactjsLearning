import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const ToDoList= ()=>(
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
);

export default ToDoList;