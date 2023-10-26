import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../../context/SearchContext";
import BranchCard from "./BranchCard";
import pets from "/assets/filter-pets.png";

const ListBranches = ({ branches }) => {
  const [filteredBranches, setFilteredBranches] = useState([]);

  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const branchesFiltered = branches.filter(
      (branch) =>
        branch.city === searchTerm.city ||
        branch.animalTypes.some(
          (animalType) => animalType.name === searchTerm.animalType
        ) ||
        searchTerm.services?.every((service) =>
          branch.services?.some((obj) => obj.name === service)
        )
    );

    console.log(branchesFiltered);

    setFilteredBranches(branchesFiltered);
  }, [searchTerm]);

  return (
    <section className="container mx-auto my-8 text-center">
      {filteredBranches.length === 0 ? (
        <div className="w-[100%] flex flex-col items-center">
          <p className="text-xl font-bold">
            No hay resultados para esa búsqueda
          </p>
          <img
            src={pets}
            alt="imagen de mascotas"
            className="w-[70%] lg:w-[50%]"
          />
        </div>
      ) : (
        filteredBranches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))
      )}
    </section>
  );
};

export default ListBranches;
