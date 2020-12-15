import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { useParams } from "react-router-dom";


const Personaje = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    console.log(id)
    return (<>
        {
    store.personaje !== null ?
    (
            <div className="container">
                <div className="row pt-4">
                    <div className="card mb-3 mx-auto">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={"../img/"+(store.personaje.house !== undefined ? store.personaje.house : "HP") +".png"} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{store.personaje.name}</h5>
                                    <p className="card-text">{store.personaje.house}</p>
                                    <p className="card-text">{store.personaje.school}</p>
                                    <p className="card-text"><small className="text-muted">{store.personaje.role}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        // <h1>{store.personaje.name}</h1> esto lo hice para mostrar el nombre
)
:
(
        <h1>No esta</h1>
)
    }
    </>)
}

export default Personaje;