import { RiFeedbackLine, RiCalendar2Line } from "react-icons/ri";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../../ui/button";
import Input from "../../ui/input";
import Select from "../../ui/select";
import Label from "../../ui/label";

const Reserver = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [alllergy, setAllergy] = useState(false);

  return (
    <>
      <div className="min-h-screen container bg-gray-100 mx-auto pt-10 ">
        <div className="space-y-4 px-10 ">
          <h2 className="text-4xl font-semibold text-center lg:text-start ">
            Datos de tu mascota
          </h2>
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <div className="flex flex-col w-full sm:w-[80%] mx-auto">
                <Label label="¿Cómo se llama tu mascota?" />
                <Input
                  name="name"
                  type="text"
                  classInput="bg-primary/50 px-3 py-3 rounded-md text-gray-600 font-medium outline-none"
                  place="Tobi, Fifi, Copito..."
                />
              </div>
              <div className="flex flex-col w-full sm:w-[80%] mx-auto">
                <Label label="¿Qué animalito tenés?" />
                <Select
                  name="pets"
                  values={["dog", "cat", "other"]}
                  options={["Perro", "Gato", "Otro"]}
                />
              </div>
              <div className="flex flex-col w-full sm:w-[80%] mx-auto">
                <Label label="¿De que tamaño es?" />
                <Select
                  name="height"
                  values={["short", "medium", "big"]}
                  options={["Pequeño", "Mediano", "Grande"]}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="mx-auto w-full sm:w-[80%]">
                  <label
                    htmlFor=""
                    className="text-xl font-semibold mb-4 text-gray-600 flex items-center"
                  >
                    ¿Cuántos años tiene?
                    <abbr
                      title="Si no lo sabes danos un aproximado"
                      className="ml-2"
                    >
                      <RiFeedbackLine className="text-2xl text-primary" />
                    </abbr>
                  </label>
                </div>
                <div className="flex space-x-4 w-full sm:w-[80%] mx-auto">
                  <Input
                    type="text"
                    name="year1"
                    place="De 0 a 99"
                    classInput="bg-primary/50"
                  />
                  <Input
                    type="text"
                    name="year2"
                    place="Del 1 al 12"
                    classInput="bg-primary/50"
                  />
                </div>
              </div>
              <div className="my-5 sm:my-10 w-full sm:w-[80%] mx-auto text-center sm:text-left">
                <label className="relative inline-flex cursor-pointer ">
                  <span className="mr-3 text-xs sm:text-base font-semibold text-gray-900 dark:text-gray-300">
                    ¿Tu mascota tiene algún tipo de alergia?
                  </span>
                  <div className="flex">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onClick={() => setAllergy(!alllergy)}
                    />
                    <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[233px] sm:after:left-[305px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </div>
                </label>
              </div>

              <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row justify-between w-full sm:w-[80%] items-center mx-auto">
                <div className="flex flex-col w-[80%] sm:w-full items-center sm:items-start ">
                  <Label label="¿Cuando lo dejas?" />
                  <div className="relative flex items-center">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="bg-primary/50 p-3 text-gray-600 rounded-md w-full sm:w-[80%]"
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
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="bg-primary/50 p-3 text-gray-600 rounded-md w-full sm:w-[80%]"
                    />
                    <span className="absolute right-4 sm:right-14">
                      <RiCalendar2Line className="text-2xl text-gray-600" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {alllergy ? (
              <div className="sm:my-10 w-full sm:w-[50%] ml-[60px] -mt-5">
                <textarea
                  className="bg-primary/50 p-4 outline-none rounded-lg"
                  name=""
                  id=""
                  cols="54"
                  rows="5"
                  placeholder="Describa el tipo de alergia o recomendación"
                ></textarea>
              </div>
            ) : (
              ""
            )}
            <div className="mt-5 flex justify-center">
              <Button
                type="submit"
                label="Pagar reserva"
                clase=" sm:w-[40%] text-center"
              />
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
