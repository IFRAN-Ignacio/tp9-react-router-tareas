import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';

// HashRouter: las rutas quedan después del "#" (ej: /#/nueva). Así la aplicación
// funciona en GitHub Pages, que no puede redirigir rutas de una SPA, aunque se recargue la página.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
