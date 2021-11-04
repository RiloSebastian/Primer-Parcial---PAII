import React, { useEffect, useState } from "react";
const initialForm = {
  id: "",
  nombre: "",
  edad: 0,
  observaciones: "",
  tipo: "",
  vacunado: "No",
};

const FormularioCrud = ({
  createMascota,
  updateMascota,
  mascotaEdit,
  setmascotaEdit,
}) => {
  const [form, setform] = useState(initialForm);

  const { id, nombre, edad, tipo, vacunado, observaciones } = form;

  useEffect(() => {
    if (mascotaEdit) {
      setform(mascotaEdit);
    }
  }, [mascotaEdit]);

  const handleChange = (e) => {
    setform((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !observaciones || !tipo || !vacunado) {
      alert("faltan Datos");
      return;
    }
    if (id) {
      createMascota(form);
    } else {
      updateMascota(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setform(initialForm);
    setmascotaEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          autoComplete="off"
          onChange={handleChange}
          value={nombre}
        />
      </div>
      <div>
        <input
          type="number"
          name="edad"
          min="1"
          max="20"
          placeholder="Edad"
          autoComplete="off"
          onChange={handleChange}
          value={edad}
        />
      </div>
      <div>
        <input
          type="select"
          name="tipo"
          placeholder="Tipo"
          autoComplete="off"
          onChange={handleChange}
          value={tipo}
        />
      </div>
      <div>
        <div>
          <input
            id="radioVacunado1"
            type="radio"
            name="vacunado"
            value={vacunado}
            checked={true}
          />
          <label htmlFor="radioVacunado1">Si</label>
        </div>
        <div>
          <input
            id="radioVacunado2"
            type="radio"
            name="vacunado"
            value={vacunado}
          />
          <label htmlFor="radioVacunado2">No</label>
        </div>
      </div>
      <div>
        <input
          type="text"
          name="observaciones"
          placeholder="Observaciones"
          autoComplete="off"
          onChange={handleChange}
          value={observaciones}
        />
      </div>
      <div>
        <input type="submit" value="Enviar" />
        <input type="reset" onClick={handleReset} value="Limpiar" />
      </div>
    </form>
  );
};

export default FormularioCrud;
