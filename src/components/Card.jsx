import React from "react";

const Card = (props) => {
  console.log(props.datos.nombre);
  return (
    <div>
      <p>Hola, soy una tarjeta!!!</p>
      <p>Nombre: {props.datos.nombre}</p>
      <p>Apellido: {props.datos.apellido}</p>
      <p>Color favorito: {props.datos.color}</p>
    </div>
  );
};

export default Card;
