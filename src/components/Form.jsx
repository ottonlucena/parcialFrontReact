import React, { useState } from "react";

const Form = (props) => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    color: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validaciones
    if (
      datos.nombre.length < 3 ||
      datos.apellido.length < 6 ||
      datos.color.length <= 2
    ) {
      setError(true);
      return;
    }

    setError(false);

    console.log(datos);
    props.onFormSubmit(datos);

    setDatos({
      nombre: "",
      apellido: "",
      color: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <li>
          <label>Ingresa tu nombre: </label>
          <input
            type="text"
            value={datos.nombre}
            onChange={(e) =>
              setDatos({ ...datos, nombre: e.target.value.trimStart() })
            }
          />
        </li>
        <li>
          <label>Ingresa tu apellido: </label>
          <input
            type="text"
            value={datos.apellido}
            onChange={(e) =>
              setDatos({ ...datos, apellido: e.target.value.trim() })
            }
          />
        </li>
        <li>
          <label>Ingresa tu color favorito: </label>
          <input
            type="text"
            value={datos.color}
            onChange={(e) =>
              setDatos({ ...datos, color: e.target.value.trim() })
            }
          />
        </li>
        <button type="submit">Enviar</button>
      </form>

      {error ? (
        <p>Por favor chequea que la información sea correcta</p>
      ) : (
        datos && props.children
      )}
    </div>
  );
};

export default Form;
