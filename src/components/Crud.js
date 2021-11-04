import React, { useEffect, useState } from "react";
import TablaMascotas from "./TablaMascotas";
import SelectTipos from "./SelectTipos";
import FormularioCrud from "./FormularioCrud";
import Spinner from "../components/Spinner";

const Crud = () => {
  const [mascotas, setmascota] = useState([]);
  const [mascotaEdit, setmascotaEdit] = useState(null);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    const URL = "http://localhost:5000/mascotas";
    const getMascotas = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        data.forEach((mascota) => {
          setmascota((mascotas) => {
            return [...mascotas, mascota];
          });
        });
      } catch (err) {}
    };

    getMascotas(URL);
  }, []);

  const createMascota = (nuevaMascota) => {
    console.log(nuevaMascota);
    nuevaMascota.id = Date.now();
    setmascota((mascotas) => {
      return [...mascotas, nuevaMascota];
    });
  };

  const updateMascota = (mascotaEditada) => {
    setmascota((mascotas) => {
      return mascotas.map((mascota) =>
        mascota.id === mascotaEditada.id ? mascotaEditada : mascota
      );
    });
  };

  const deleteMascota = (idMascota) => {
    if (
      window.confirm(
        "confirma la eliminacion de la mascota '" + idMascota + "'?"
      )
    )
      setmascota((mascotas) => {
        return mascotas.filter((mascota) => mascota.id !== idMascota);
      });
  };

  const handleResults = (results) => {
    setmascota(results);
    setflag(true);
  };

  const renderResults = () => {
    return mascotas.length ? (
      <TablaMascotas mascotas={mascotas} deleteMascota={deleteMascota} />
    ) : (
      <p>No hay mascotas</p>
    );
  };

  return (
    <div>
      <div>
        <SelectTipos onResults={handleResults} />
      </div>
      <div>
        <FormularioCrud
          createMascota={createMascota}
          updateMascota={updateMascota}
          mascotaEdit={mascotaEdit}
          setmascotaEdit={setmascotaEdit}
        ></FormularioCrud>
      </div>
      <div></div>
      <TablaMascotas mascotas={mascotas} deleteMascota={deleteMascota} />
    </div>
  );
};

export default Crud;
