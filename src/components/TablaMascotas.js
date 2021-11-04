import React from "react";
import ItemTablaMascota from "./ItemTablaMascota";

const TablaMascotas = ({mascotas, mascotaEdit, deleteMascota}) => {
  return (
    <>
      <h2>Mascotas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Edad</th>
            <th>Vacunado</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((mascota) => (
            <ItemTablaMascota key={mascota.id} mascota={mascota} mascotaEdit={mascotaEdit} deleteMascota={deleteMascota}/>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaMascotas;
