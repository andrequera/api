import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

const Card = () => {
    const { store, actions } = useContext(Context)
    return (<>
        {
            store.personajes !== null ?
                (
                    store.personajes.map((p, i) => {
                        return (
                            <div key={i} className="col-md-3 py-2">
                                <div className="card">
                                    <img src="../img/personajes.jpg" className="card-img-top" alt="..." />
                                    {/* las anteriores llevan p.algodon porque las tomo de las api, aca es directo, esto es para el link de la foto */}
                                    {/* no lleva p pprque es una imagen */}
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.role}</p>
                                        <Link to={"/rutaPersonaje/" + p._id} className="btn btn-primary" onClick={() => { actions.personaje(p._id) }}>Ver Personaje</Link>
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
    </>)
}
export default Card;
