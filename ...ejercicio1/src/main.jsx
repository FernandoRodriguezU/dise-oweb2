import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prueba from './componentes/Prueba.jsx'
import Hola from './componentes/hola.jsx'
import MisRoutes from './Routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <MisRoutes />
   
  </StrictMode>,
)