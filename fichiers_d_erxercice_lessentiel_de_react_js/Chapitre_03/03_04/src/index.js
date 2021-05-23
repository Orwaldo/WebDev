import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item d-flex align-tiems-center">
                        Ranger la vaisselle 
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-tiems-center">
                        Répondre appel d'offres
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-tiems-center">
                        Signer contrat
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                    <li className="list-group-item d-flex align-tiems-center">
                        Ranger la salon
                        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                    </li>
                </ul>
                <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                    <div className="btn-group">
                        <a href="#" className="btn btn-outline-dark bg-light">List</a>
                        <a href="#" className="btn btn-outline-dark bg-light">Completed</a>
                        <a href="#" className="btn btn-outline-dark bg-light">Add</a>
                    </div>
                </footer>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

