import React from "react"
import "bootstrap"
import "jquery"
import "popper.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./views/home"
import Personaje from "./views/personaje"
import Casas from "./views/casas"
import Casa from "./views/casa"
import Navbar from "./components/navbar"
import injectContext from "./store/appContext"
// importacion de browser para las rutas va con react-router-dom


//nombre de los componentes en mayuscula LLLLaaayput
const Layout = () => {
    return (
        <BrowserRouter>
        <Navbar /> 
        {/* se ve feo, debo importar bootstrap */}


        {/* dentro del Switch coloco los componentes que cambian, fuera los fijos */}
            <Switch>
            <Route exact path="/" component={Home} />
            {/* "/" este es la primera pagina */}

            <Route exact path="/rutaPersonaje/:id" component={Personaje} />
            <Route exact path="/rutacasas" component={Casas} />
            <Route exact path="/rutacasas/:id" component={Casa} />

             </Switch>
             {/* aca va el footer */}
        </BrowserRouter>
    )
}

export default injectContext(Layout);
//relacionando con el context colocar injectContext