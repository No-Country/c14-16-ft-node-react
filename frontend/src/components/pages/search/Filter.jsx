import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { useFetch } from "../../../customHooks/useFetch";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/button";

import image from "/assets/Images/filter-bg_02.jpg";

const Filter = ({ branches }) => {
  const [userFilter, setUserFilter] = useState({
    city: "",
    animalType: "",
    services: [],
  });

  const { data, loading } = useFetch(
    "https://doggyhouse.azurewebsites.net/api/services"
  );

  console.log(data);

  const { searchTerm, handleFilteredBranches } = useContext(SearchContext);

  const branchFilter = () => {
    const filteredBranches = branches.filter(
      (branch) =>
        (userFilter.city.toLowerCase() === "" ||
          branch.city.toLowerCase() === userFilter.city.toLowerCase()) &&
        branch.animalTypes.some(
          (animalType) =>
            userFilter.animalType === "" ||
            animalType.name.toLowerCase() ===
              userFilter.animalType.toLowerCase()
        ) &&
        userFilter.services.every((service) =>
          branch.services.some((obj) => {
            return obj.name.toLowerCase() === service.toLowerCase();
          })
        )
    );
    return filteredBranches;
  };

  useEffect(() => {
    let filteredBranches = [];

    if (
      searchTerm &&
      searchTerm.city !== "todas" &&
      userFilter &&
      userFilter.city !== "todas"
    ) {
      filteredBranches = branches.filter(
        (branch) =>
          (searchTerm.city === "" ||
            branch.city.toLowerCase() === searchTerm.city.toLowerCase()) &&
          branch.animalTypes.some(
            (animalType) =>
              searchTerm.animalType === "" ||
              animalType.name.toLowerCase() ===
                searchTerm.animalType.toLowerCase()
          )
      );
    } else {
      filteredBranches = branches;
      console.log(filteredBranches);
    }
    handleFilteredBranches(filteredBranches);
  }, [searchTerm]);

  const handleCheckboxChange = (e) => {
    if (
      e.target.checked &&
      !userFilter.services.includes(e.target.value.toLowerCase())
    ) {
      setUserFilter((userFilter) => ({
        ...userFilter,
        services: [...userFilter.services, e.target.value.toLowerCase()],
      }));
    } else {
      setUserFilter((userFilter) => ({
        ...userFilter,
        services: userFilter.services.filter(
          (service) => service.toLowerCase() !== e.target.value.toLowerCase()
        ),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilteredBranches(branchFilter());
  };

  // Estilos
  const filterBg = {
    backgroundImage: `linear-gradient(to right, rgba(240,162,37,0.13) 0%, rgba(0,0,10,0.7035189075630253) 35%, rgba(240,162,37,0.13) 100%), url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section
      style={filterBg}
      className="container mx-auto p-8 bg-[white] shadow-lg sm:rounded-xl"
    >
      <h2 className="my-8 text-xl text-center text-white font-bold font-roboto">
        Filtro de búsqueda
      </h2>
      <form
        id="filter-form"
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full lg:w-[70%]">
          <h3 className="mb-4 text-md text-white font-bold font-roboto">
            Servicios Disponibles
          </h3>
          <div className="mb-8 grid grid-cols-2 gap-8 place-content-center md:flex md:flex-wrap md:flex-row text-white font-josefin">
            {data?.result?.map((service) => (
              <Checkbox
                key={service.id}
                service={service}
                disabled={userFilter.city === "todas" ? true : undefined}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[70%] mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-md text-white font-bold font-roboto">
              Tipo de mascota
            </h3>
            <div>
              <select
                type="select"
                name="animalType"
                value={userFilter.animalType}
                disabled={userFilter.city === "todas" ? true : undefined}
                className="w-full p-4 bg-gray-200 border-b-2 border-[#333] rounded-md outline-none"
                onChange={(e) =>
                  setUserFilter((userFilter) => ({
                    ...userFilter,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="">Selecciona una mascota</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-md text-white font-bold font-roboto">
              Ciudad
            </h3>
            <div>
              <select
                type="select"
                name="city"
                value={userFilter.city}
                className="w-full p-4 bg-gray-200 border-b-2 border-[#333] rounded-md outline-none"
                onChange={(e) =>
                  setUserFilter((userFilter) => ({
                    ...userFilter,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="">Selecciona tu Ciudad</option>
                <option value="todas">Todas</option>
                {branches.map((branch, index) => (
                  <option key={index} value={branch.city}>
                    {branch.city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <Button type="submit" label="Buscar" />
      </form>
    </section>
  );
};

export default Filter;
