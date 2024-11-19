import imagen from './../assets/react.svg'
import img1 from "../assets/imagen1.jpg"
import img2 from "../assets/imagen3.jfif"
import img3 from "../assets/imagen2.jfif"
import Face from './face'
const Hola=({saludo='', edad=null})=>{
    const datos=[
        {id:1,nombre:"Fernando", apellido: "Perez", foto:img2},
        {id:2,nombre:"Mateo", apellido:"Villca", foto:img1},
        {id:3,nombre:"liz", apellido: "laime", foto:img3}   
    ]
    return (
        <>
        <p>{saludo} edad: {edad}este es mi segundo componente</p>
        <table>
            <tr>
            <th>nombre</th>
            <th>apellido</th>
            <th>Foto</th>
            </tr>
            {datos.map((data) => (
                <tr key={data.id}>
            <td>{data.nombre}</td>
            <td>{data.apellido}</td>
            <td><img src={data.foto} alt={imagen} /></td>

            </tr>
            ))}            
        </table>
        <Face/>
        </>
    )
}
export default Hola;