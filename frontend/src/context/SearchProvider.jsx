import { useState } from "react";
import { SearchContext } from "./SearchContext";
import PropTypes from "prop-types";

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBranches, setFilteredBranches] = useState([]);

  const handleSearchTerm = (objSearch) => {
    setSearchTerm(objSearch);
  };

  const handleFilteredBranches = (branches) => {
    setFilteredBranches(branches);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleSearchTerm,
        filteredBranches,
        handleFilteredBranches,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export default SearchProvider;