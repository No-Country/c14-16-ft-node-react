import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../../context/SearchContext";
import BranchCard from "./BranchCard";
import pets from "/assets/filter-pets.png";

const ListBranches = () => {
  const { filteredBranches } = useContext(SearchContext);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    if (filteredBranches) {
      setBranches(filteredBranches);
    }
  }, [branches, filteredBranches]);

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
        branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)
      )}
    </section>
  );
};

export default ListBranches;
