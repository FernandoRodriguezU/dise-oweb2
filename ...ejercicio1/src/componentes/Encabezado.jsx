

import { NavLink, Outlet } from "react-router-dom";

const Encabezado = () => {
    return (
        <div>
            <h1>Bienvenido a la página principal</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reserva">Reserva</NavLink>
                <NavLink to="/listado">Listado</NavLink>
                <NavLink to="/ubicacion">Ubicación</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default Encabezado;