import animalChico from "/assets/perrochico.png";
import animalMediano from "/assets/perromediano.png";
import animalGrande from "/assets/perrogrande.png";

const Tarifas = ({ data }) => {
  return (
    <div className="mb-16">
      <h2 className="mb-2 text-lg text-left font-bold font-roboto">Tarifas</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full max-lg border-2 border-primary">
          <thead>
            <tr className="bg-primary text-white">
              <th scope="col"></th>
              <th scope="col" className="py-4 text-center font-roboto">
                Hasta 10Kg
              </th>
              <th scope="col" className="py-4 text-center font-roboto">
                Entre 10Kg y 20Kg
              </th>
              <th scope="col" className="py-4 text-center font-roboto">
                Mayor a 20Kg
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-2 text-center font-roboto bg-gray-100">
                Tamaño
              </th>
              <td>
                <img
                  src={animalChico}
                  alt="imagen de animales hasta 10kg"
                  className="w-[200px] mx-auto"
                />
              </td>
              <td>
                <img
                  src={animalMediano}
                  alt="imagen de animales entre 10Kg y 20Kg"
                  className="w-[200px] mx-auto"
                />
              </td>
              <td>
                <img
                  src={animalGrande}
                  alt="imagen de animales mayor a 20Kg"
                  className="w-[200px] mx-auto"
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="p-2 text-center font-roboto bg-gray-100">
                Precio
              </th>
              {data?.result?.rates?.map((rate) => (
                <td
                  key={rate.id}
                  className="p-2 text-lg text-center font-bold font-roboto"
                >{`$${rate.price}`}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Tarifas;
