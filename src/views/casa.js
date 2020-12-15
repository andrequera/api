import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { useParams } from "react-router-dom";

const Casa = () => {
  const { store, actions } = useContext(Context)
  const { id } = useParams()
  console.log(store.casa)

  return (<>
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-6 offset-3">

          <div className="card">
            <img src={"../img/" + store.casa.name + ".png"} width="200" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{store.casa.name}</h5>
              <p className="card-text"><small className="text-muted">{store.casa.mascot}</small></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>)

}

export default Casa;
