import { useContext, useState } from "react";
import ListResults from "./ListResults";
import Filter from "./Filter";
import { SearchContext } from "../../../context/SearchContext";

const SearchPage = () => {
  const [branchList, setBranchList] = useState([]);

  const { searchTerm } = useContext(SearchContext);

  const updateBranches = (filteredBranches) => {
    setBranchList(filteredBranches);
  };

  return (
    <main>
      <Filter branchList={branchList} updateBranches={updateBranches} />
      <ListResults search={searchTerm} />
    </main>
  );
};

export default SearchPage;
