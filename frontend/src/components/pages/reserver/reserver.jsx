import { RiCalendar2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { TOKEN_KEY } from "../../../constants/api";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Button from "../../ui/button";
import Label from "../../ui/label";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Reserver = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [reserver, setReserver] = useState({
    pet_id: null,
    branch_id: id,
    from_date: new Date(),
    to_date: new Date(),
    comments: "",
    transport: false,
    price: 0,
    description: "Reserva en DoggysHouse",
  });
  const user = JSON.parse(sessionStorage.getItem("User"));
  const token = sessionStorage.getItem(TOKEN_KEY);

  useEffect(() => {
    const getPets = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(
          `https://doggyhouse.azurewebsites.net/api/pets/byUser/${user.id}`,
          { headers }
        );
        const responseData = await response.json();
        setPets(responseData.result);
      } catch (error) {
        console.log(error);
      }
    };

    getPets();
  }, []);

  const handleChange = (e) => {
    setReserver({ ...reserver, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setReserver({ ...reserver, [name]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reserver.from_date = format(reserver.from_date, "yyyy-MM-dd");
    reserver.to_date = format(reserver.to_date, "yyyy-MM-dd");

    navigate(`/confirm`, { state: { reserver } });
  };
  return (
    <>
      <div className="min-h-screen container bg-gray-100 mx-auto pt-10 ">
        <div className="space-y-4 px-10 ">
          <h2 className="text-2xl font-bold font-roboto text-center lg:text-start ">
            Datos de tu reserva
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col w-full sm:w-[80%] mx-auto">
                <Label label="¿Qué animalito reservaras?" />
                <select
                  name="pet_id"
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-200 border-b-2 border-[#333] rounded-md outline-none"
                >
                  <option value="">Selecciona una mascota</option>
                  {pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 sm:space-y-0 sm:flex-row justify-between w-full sm:w-[80%] items-center mx-auto">
                <div className="flex flex-col w-[80%] sm:w-full items-center sm:items-start ">
                  <Label label="¿Cuando lo dejas?" />
                  <div className="relative flex items-center">
                    <DatePicker
                      selected={reserver.from_date}
                      onChange={(date) => handleDateChange("from_date", date)}
                      className="bg-gray-200 p-4 rounded-md w-full sm:w-[80%] focus:outline-primary"
                    />
                    <span className="absolute right-4 sm:right-14">
                      <RiCalendar2Line className="text-2xl text-gray-600" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-[80%] sm:w-full items-center sm:items-start ">
                  <Label label="¿Cuando lo retiras?" />
                  <div className="relative flex items-center">
                    <DatePicker
                      selected={reserver.to_date}
                      onChange={(date) => handleDateChange("to_date", date)}
                      className="bg-gray-200 p-4 rounded-md w-full sm:w-[80%] focus:outline-primary"
                    />
                    <span className="absolute right-4 sm:right-14">
                      <RiCalendar2Line className="text-2xl text-gray-600" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-5 sm:my-10 w-full sm:w-[80%] mx-auto text-center sm:text-left">
                <label className="relative inline-flex cursor-pointer ">
                  <span className="mr-3 text-sm sm:text-base font-semibold text-gray-900 ">
                    ¿Necesitas transporte?
                  </span>
                  <div className="flex">
                    <input
                      type="checkbox"
                      value={reserver.transport}
                      name="transport"
                      className="sr-only peer"
                      onClick={() =>
                        setReserver({
                          ...reserver,
                          ["transport"]: !reserver.transport,
                        })
                      }
                    />
                    <div className="w-11 h-6 mb-8 relative bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </label>

                <div className="sm:w-[100%] mx-auto text-center sm:text-left">
                  <Label label="Comentarios adicionales" />
                  <textarea
                    name="comments"
                    placeholder="Ingrese un comentario u observación"
                    id="comments"
                    cols="30"
                    rows="8"
                    onChange={handleChange}
                    className="w-full mt-2 p-4 bg-gray-200 resize-none focus:outline-primary rounded-md"
                  ></textarea>
                </div>
              </div>
              <div className="w-full self-center mt-5 flex flex-col gap-1 items-center justify-center">
                <Button
                  type="submit"
                  label="Pagar reserva"
                  clase="w-full text-center"
                />
                <Button
                  type="button"
                  label="Cancelar"
                  clase="w-full text-center"
                  click={() => navigate("/search")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="relative  ">
        <div className="hidden md:block absolute bottom-[120px] -right-[180px] ">
          <img
            src="/assets/perro.webp"
            alt=""
            className="w-[50%] -rotate-[110deg]"
          />
        </div>
        <div className="hidden md:block absolute bottom-20 -left-2">
          <img src="/assets/gato.webp" alt="" className="w-[50%]" />
        </div>
      </div>
    </>
  );
};

export default Reserver;
