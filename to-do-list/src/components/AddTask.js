import React from 'react';

class AddTask extends React.Component{

    render(){
        return(
        <section>
            <h1 className="m-3">Nouvelle Tâche</h1>
            <div className="card ex-3">
                <form className="card-body" onSubmit={(e)=>this.handleSubmit(e)}>
                  <div className ="form-group">
                    <label className="taskName">Nom de la tâche</label>
                    <input type="text" className="form-control" name="taskName"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>

        </section>);
    }
    handleSubmit(e){}
}

export default AddTask;