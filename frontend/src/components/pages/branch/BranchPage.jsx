import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/useFetch";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Tarifas from "./Tarifas";
import Button from "../../ui/button";

const BranchPage = () => {
  const { id } = useParams();

  const { data, loading, errorFetch } = useFetch(
    `https://doggyhouse.azurewebsites.net/api/branches/${id}`
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
          <p>Cargando sucursal...</p>
        </main>
      ) : !loading && !errorFetch ? (
        <main className="container mx-auto py-16 px-2 md:px-8">
              <Link to={`/search`} className="bg-gray-300 text-white px-2 py-1 rounded-lg">
                Atrás
              </Link>
              
          <div className="mb-8 flex gap-8 mt-4">
            <img
              src={`data:image/png;base64,${data?.result?.images[0]}`}
              alt="imagen de sucursal"
              className="max-w-[50%]"
            />
            <div>
              <h1 className="text-left text-xl font-bold font-roboto">
                {data?.result?.name}
              </h1>
              <p className="mb-4 text-left text-sm font-josefin">
                {data?.result?.address}
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <h2 className="text-sm text-left font-bold font-roboto">
                  Servicios:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data?.result?.services?.map((service, index) => (
                    <span
                      key={index}
                      className="flex items-center text-xs p-1 bg-primary rounded-md"
                    >
                      {service.name}
                      <img
                        src={`data:image/png;base64,${service.image}`}
                        alt={`icono de ${service.name}`}
                        className="w-6 ml-2"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Descripcion */}
          <div className="mb-16">
            <h2 className="mb-2 text-lg text-left font-bold font-roboto">
              Sobre la guardería
            </h2>
            <p className="font-josefin">{data?.result?.description}</p>
          </div>
          {/* Tarifas */}
          <Tarifas data={data} />
          <div className="w-full flex justify-center py-8 mb-16 bg-gray-100">
            <Link to={`/reserver`} className="text-gray-100 text-lg w-full md:max-w-[350px] rounded-lg py-3 my-5 font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300 bg-primary text-center">Reservar</Link>
          </div>
        </main>
      ) : (
        <main>
          <p>{errorFetch.error.message}</p>
        </main>
      )}
    </>

  );
};

export default BranchPage;
