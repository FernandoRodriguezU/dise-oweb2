import { BrowserRouter ,Route,Routes}from "react-router-dom";
import Contacto from"./componentes/Contacto";
import Face from"./componentes/face";
import Reserva from "./componentes/Reserva";
import Listado from "./componentes/Listado";
import Ubicacion from "./componentes/Ubiacion";
import Inix from "./componentes/Iniciox";

const MisRoutes =()=>{
return(
    <BrowserRouter>
<Routes>

<Route path="/" element={<Inix/>}/>





        <Route path="/reserva" element={<Reserva />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/ubicacion" element={<Ubicacion />} /> 

</Routes>

</BrowserRouter>
)
}
export default MisRoutes;


