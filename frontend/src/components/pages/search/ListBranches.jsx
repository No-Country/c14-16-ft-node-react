
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import BranchCard from "./BranchCard";

const ListBranches = () => {
  const { branches, searchTerm } = useContext(SearchContext);

  const filteredBranches = branches.filter((branch) => {
    if (
      branch.ciudad === searchTerm.place &&
      branch.tipoMascotas.includes(searchTerm.pet)
    ) {
      return true;
    }
    return false;
  });

  console.log(filteredBranches);
  return (
    <div className="container mx-auto p-16 text-center">
      {filteredBranches.length === 0
        ? "No hay resultados"
        : filteredBranches.map((branch) => <BranchCard branch={branch} />)}
    </div>
  );
};

export default ListBranches;