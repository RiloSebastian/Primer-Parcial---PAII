import React, { useState } from "react";

const SelectTipos = () => {
  const URL_TIPOS = "http://localhost:5000/tipos";
  const URL_MASCOTAS = "http://localhost:5000/mascotas";
  const [tipoMascota, settipoMascota] = useState("Perro");
  const handleChange = ({ target }) => {
    settipoMascota(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}`)
      .then(
        (res) => console.log(res)
        //res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText)
      )
      .then((data) => {
        //console.log(data.Search);
        //onResults(data.Search || []);
      })
      .catch((err) => {
        //console.log(err.message);
        //onResults(null);
      });
  };

  return <div></div>;
};

export default SelectTipos;
