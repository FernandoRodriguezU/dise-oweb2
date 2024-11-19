import Examen1 from './Examen1.jsx';
import Examen2 from './Examen2.jsx';
const Prueba =() =>{
const cafe=true;
return(
    <>
    <h3>{cafe?"caliente":"frio"}</h3>
    <Examen1 /> 
    <Examen2 />
    </>
)
}
export default Prueba;