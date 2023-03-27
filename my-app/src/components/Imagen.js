import React, { useState, useEffect } from "react";
import axios from "axios";

function ImagenAleatoria() {
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    async function obtenerImagen() {
      const respuesta = await axios.get(
        "https://api.unsplash.com/photos/random?client_id=pSNclUQnEJdfd-yMul7IkudO2ZwwpLU2UGDcOwm3oQE"
      );
      console.log(respuesta)
      setImagen(respuesta.data);
    }

    obtenerImagen();
  }, []);

  return (
    <div>
      {imagen && <img src={imagen} alt="Imagen aleatoria de Unsplash" />}
    </div>
  );
}

export default ImagenAleatoria;


 
//Se consumio el API  de unplash, sin embargo solo es posible 50imagenes por hora,
//por lo que se utilizó otro metodo por practicidad

//"https://api.unsplash.com/photos/random?client_id=pSNclUQnEJdfd-yMul7IkudO2ZwwpLU2UGDcOwm3oQE"
