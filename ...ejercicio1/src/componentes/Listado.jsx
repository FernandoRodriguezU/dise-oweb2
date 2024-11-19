
import React from 'react';

const Listado = () => {
    const datos = [
        { id: 1, nombre: "Juan", apellido: "Perez" },
        { id: 2, nombre: "Pedro", apellido: "Gomez" },
        { id: 3, nombre: "Luis", apellido: "Martinez" }
    ];

    return (
        <div>
            <h2>Listado</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listado;