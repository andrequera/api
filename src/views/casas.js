import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

const Casas = () => {
    const { store, actions } = useContext(Context)
    return (<>
    <div className="container">
        <div className="row">
        {
            store.casas !== null ?
                (                    
                    store.casas.map((c, i) => {
                        return (                
                            <div key={i} className="col-md-3 py-2">
                                <div className="card">
                                    <img src={"../img/" + c.name + ".png"} width="200" height="200" className="card-img-top" alt="..." />
                                    {/* las anteriores llevan p.algodon porque las tomo de las api, aca es directo, esto es para el link de la foto */}
                                    <div className="card-body">
                                        <h5 className="card-title">{c.name}</h5>
                                        <p className="card-text">{c.mascot}</p>
                                        <Link to={"/rutacasas/" + c._id} className="btn btn-primary" onClick={() => { actions.casa(c._id) }}>Ver Casas</Link>
                                        {/* para el id de personaje y el link de los personajes */}
                                    </div>
                                </div>
                            </div>

                        )
                    })
                )
                :
                (
                    <h1> No esta</h1>

                )

        }
        </div>
    </div>
       


    </>)

}

export default Casas;