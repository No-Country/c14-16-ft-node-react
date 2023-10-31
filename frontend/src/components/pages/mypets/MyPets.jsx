import { useFetch } from "../../../customHooks/useFetch.js";
import { Link, Outlet } from "react-router-dom";
import PetCard from "./PetCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImlhdCI6MTY5ODcwNjcyMX0.t-o2H4Oeft3dqhxaFI8yJ-KrgSePWo25ZNAZq1oRLxQ";
const MyPets = () => {
  const { data, loading, errorFetch } = useFetch(
    `https://doggyhouse.azurewebsites.net/api/pets/byUser/${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Aquí es donde incluyes el token en los encabezados de la solicitud
      },
    }
  );
  console.log(data);
  return (
    <section className="px-8">
      <div className="w-full p-8 my-4 flex gap-4 items-center bg-gray-100">
        <Link className="py-2 px-4 flex items-center gap-2 text-white bg-primary rounded-md hover:bg-transparent hover:outline-2 hover:outline-primary hover:text-primary transition-colors duration-300">
          <BsFillPlusCircleFill className="text-xl" /> Agregar Mascota
        </Link>
      </div>
      <ul className="w-full flex flex-wrap gap-8 justify-center">
        {data?.result?.map((pet) => (
          <li key={pet.id} className="mb-4 w-full max-w-[450px] shadow-md">
            <PetCard
              name={pet.name}
              breed={pet.breed}
              type={pet.type}
              description={pet.description}
              weight={pet.weight}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </section>
  );
};

export default MyPets;
