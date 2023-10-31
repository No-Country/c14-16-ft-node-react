import React, { useState } from "react";
import Input from "../../ui/inputs";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/button";

// Estilos
const filterBg = {
  backgroundImage: `linear-gradient(to right, rgba(240,162,37,0.13) 0%, rgba(0,0,10,0.7035189075630253) 35%, rgba(240,162,37,0.13) 100%))`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    types: "",
    description: "",
    weight: "",
  });

  return (
    <div style={filterBg} className="min-w-screen bg- ">
      <form>
        <label htmlFor="name">
          <Input
            id="name"
            name="name"
            type="text"
            value={pet.name}
            place="Ingresa su nombre"
            onChange={(e) =>
              setPet((pet) => ({ ...pet, [e.target.name]: e.target.value }))
            }
            errors={""}
          />
        </label>
        <label htmlFor="types">
          <select name="types" id="types" value="pet.type"></select>
        </label>
        <Button type="submit" label="Agregar" clase="" />
      </form>
    </div>
  );
};

export default AddPet;
