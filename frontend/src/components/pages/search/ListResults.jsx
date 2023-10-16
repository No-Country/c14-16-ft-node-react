import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const ListResults = ({ search }) => {
  const { branches } = useContext(SearchContext);

  return (
    <div className="container mx-auto p-16 text-center">
      {branches.ciudad === search.place ||
      Object.values(branches.tipoMascotas).includes(search.petType) ? (
        <h1>Existen Resultados</h1>
      ) : (
        <h1>No hay resultados para esta búsqueda</h1>
      )}
    </div>
  );
};

export default ListResults;
