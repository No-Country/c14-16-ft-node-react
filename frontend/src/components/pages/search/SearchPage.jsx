import { useFetch } from "../../../customHooks/useFetch.js";
import ListBranches from "./ListBranches";
import Filter from "./Filter";
import ClipLoader from "react-spinners/ClipLoader";

const SearchPage = () => {
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
          <Filter branches={data.result} />
          <ListBranches />
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
