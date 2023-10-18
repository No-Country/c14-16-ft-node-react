import { useState } from "react";
import ListResults from "./ListResults";
import Filter from "./Filter";

const branches = [
  {
    name: "Sucursal Canina Mi Sueño",
    dirección: "Cachi 258, C1437 CABA",
    ciudad: "Montevideo",
    calificación: 5,
    capacidadTotal: 20,
    capacidadOcupada: 5,
    reseñas: [
      "excelente lugar",
      "Mi perro hiper contento",
      "No cambio más de lugar",
      "Excelente atencion a mi gatito",
    ],
    servicios: [
      "Peluquería",
      "Dietas especiales",
      "Juegos y actividades",
      "Paseos personales",
      "Paseos en manada",
      "Veterinaria",
    ],
  },
  {
    name: "Sucursal Canina Dientitos",
    dirección: "Belgrano 1043, C1437 CABA",
    ciudad: "Paraná",
    calificación: 3,
    capacidadTotal: 10,
    capacidadOcupada: 5,
    reseñas: [
      "Mi gatito volvió un poco nervioso",
      "Me gustó mucho el lugar",
      "Recontra Agredecidos por el servicio",
      "No esta mal, mejoraría si pudieran ofrecer paseos",
    ],
    servicios: ["Peluquería", "Dietas especiales", "Juegos y actividades"],
  },
  {
    name: "Sucursal Mascotas Guau!",
    dirección: "Juan Manzonni 43, C1437 CABA",
    ciudad: "Buenos Aires",
    calificación: 4,
    capacidadTotal: 10,
    capacidadOcupada: 2,
    reseñas: [
      "Henry volvió re contento!",
      "Me gustó mucho el lugar",
      "Aparte de cuidarlo lo bañaron y quedo muy bien!",
      "El precio es acorde al servicio",
      "Me costó encontrar el lugar",
      "Muy lindo lugar!",
    ],
    servicios: [
      "Peluquería",
      "Dietas especiales",
      "Juegos y actividades",
      "Paseos personales",
    ],
  },
  {
    name: "Sucursal Mascotas Su Reino de pelos",
    dirección: "Paso de los Libres 800, C1437 CABA ",
    ciudad: "La Plata",
    calificación: 4,
    capacidadTotal: 10,
    capacidadOcupada: 2,
    reseñas: [
      "Henry volvió re contento!",
      "Me gustó mucho el lugar",
      "Aparte de cuidarlo lo bañaron y quedo muy bien!",
      "El precio es acorde al servicio",
      "Me costó encontrar el lugar",
      "Muy lindo lugar!",
    ],
    servicios: [
      "Peluquería",
      "Dietas especiales",
      "Juegos y actividades",
      "Paseos personales",
    ],
  },
];

const SearchPage = () => {
  const [branchList, setBranchList] = useState(branches);

  const updateBranches = (filteredBranches) => {
    setBranchList(filteredBranches);
  };

  return (
    <main>
      <Filter branchList={branchList} updateBranches={updateBranches} />
      <ListResults branchList={branchList} />
    </main>
  );
};

export default SearchPage;
