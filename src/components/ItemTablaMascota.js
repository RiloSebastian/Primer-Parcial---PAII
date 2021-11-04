import React from "react";

const ItemTablaMascota = ({mascota, mascotaEdit, deleteMascota}) => {
  const { id, nombre, edad, tipo, vacunado, observaciones } = mascota;
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{tipo}</td>
      <td>{edad}</td>
      <td>{vacunado}</td>
      <td>{observaciones}</td>
      <td>
          <button onClick={mascotaEdit}>Editar</button>
      </td>
      <td>
          <button onClick={deleteMascota}>Editar</button>
      </td>
    </tr>
  );
};

export default ItemTablaMascota;
