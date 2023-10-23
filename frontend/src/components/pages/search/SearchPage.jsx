import ListBranches from "./ListBranches";
import Filter from "./Filter";
import { useFetch } from "../../../customHooks/useFetch.js";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../context/SearchContext";
import ClipLoader from "react-spinners/ClipLoader";

const SearchPage = () => {
  const { searchTerm, handleSearchTerm } = useContext(SearchContext);

  const { data, loading, errorFetch } = useFetch(
    "https://doggyhouse.azurewebsites.net/api/branches"
  );

  return (
    <>
      {loading ? (
        <main className="flex flex-col justify-center items-center py-[30%] md:py-[35%] lg:py-[24%] xl:py-[14%]">
          <ClipLoader
            loading={loading}
            color="#f8ce25"
            cssOverride={{}}
            size={54}
          />
          <p>Cargando sucursales...</p>
        </main>
      ) : !loading && !errorFetch ? (
        <main>
          <Filter handleSearchTerm={handleSearchTerm} />
          <ListBranches branches={data.result} />
        </main>
      ) : (
        <main>
          <p>{errorFetch.error.message}</p>
        </main>
      )}
    </>
  );
};

export default SearchPage;
