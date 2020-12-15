import React, { useContext } from "react";
import { Context } from "../store/appContext"
import Card from "../components/card";


const Home = () => {
    const { store, actions } = useContext(Context)
    // se trabaja de la misma manera del state y del setState

    console.log(store.personajes)

    return (
        <>
            
            <div className="container">
                <div className="row py-4">
                    <img src={"../img/"+store.casa+".png"} width="200" height="200" className="mx-auto img-fluid" alt=""/>
                {/* <h1>{store.casa}</h1> */}
                </div>
                <div className="row">
                   <Card/>
                   {/* abri card y las cambie */}
                </div>
                
            </div>
        </>
    )
}
export default Home;
