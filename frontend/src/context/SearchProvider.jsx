import { useState } from "react";
import { SearchContext } from "./SearchContext";
import PropTypes from "prop-types";

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (objSearch) => {
    setSearchTerm(objSearch);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleSearchTerm,
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
