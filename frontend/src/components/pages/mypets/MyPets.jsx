import { useFetch } from "../../../customHooks/useFetch.js";
import { Link, Outlet } from "react-router-dom";
import PetCard from "./PetCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { TOKEN_KEY } from "../../../constants/api.js";
import { useEffect, useState } from "react";
import AddPet from "./AddPet.jsx";

const MyPets = () => {
  const [showAdd , setShowAdd] = useState(false)
  const [pets, setPets] = useState([])
  const user = JSON.parse(sessionStorage.getItem('User'))
  const token = sessionStorage.getItem(TOKEN_KEY)


  useEffect(() => {
    if(!showAdd){
      const getPets = async() =>{
        const response = await fetch( `https://doggyhouse.azurewebsites.net/api/pets/byUser/${user.id}`, {headers: {Authorization: `Bearer ${token}`}})
        const responseData = await response.json()
        setPets(responseData.result)
      }
      getPets()
    }
  }, [showAdd, token, user.id])


  const handleModalAdd = () =>{
    setShowAdd(!showAdd)
  }

  return (
    <section className="px-8">
      <div className="w-full p-8 my-4 flex gap-4 items-center bg-gray-100">
        <Link
          onClick={handleModalAdd}
          className="py-2 px-4 flex items-center gap-2 text-white bg-primary rounded-md hover:bg-transparent hover:outline-2 hover:outline-primary hover:text-primary transition-colors duration-300"
        >
          <BsFillPlusCircleFill className="text-xl" /> Agregar Mascota
        </Link>

        {showAdd && <AddPet id={user.id} token={token} handleModalAdd={handleModalAdd}/>}
      </div>
      <ul className="w-full flex flex-wrap gap-8 justify-center">
        {pets.map((pet) => (
          <li key={pet.id} className="mb-4 w-full max-w-[450px] shadow-md">
            <PetCard
              name={pet.name.toUpperCase()}
              breed={pet.breed}
              type={pet.types.name}
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
