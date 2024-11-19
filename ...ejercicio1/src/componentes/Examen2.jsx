const Examen2 = () => {
    const imagenSrc = "https://casamontessori.edu.co/wp-content/uploads/2018/05/fondos-pantalla-paisajes-hermosos-bonitos-naturales-escritorio-fotografias-hd-wallpaper-imagenes-fotos-3d-gato-gatitos-tierno-1-1.jpg";
    const descripcion = "Esta es una imagen de cool";

    return (
        <>
            <h3>{descripcion ? descripcion : "No hay descripción disponible"}</h3>
            <img src={imagenSrc} alt="Imagen de ejemplo" />
        </>
    );
}

export default Examen2;