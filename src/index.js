import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; borrado de raiz + css (interno, no la carpeta, solo adentrep)
//import App from './App'; borrar todo de raiz, porque uso React Router y uso es Layaot
import * as serviceWorker from './serviceWorker';
import Layout from './layout';

// Aca importo, donde estaba App lo borre
ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
