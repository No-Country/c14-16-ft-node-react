import { Link } from "react-router-dom";
const BranchCard = ({ branch }) => {
  return (
    <Link to={`/branch/${branch.id}`} className="max-w-[600px]">
      <article className="min-h-[300px] p-4 flex flex-col gap-4 bg-gray-100 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
        <div className="flex gap-4">
          <img
            src={`data:image/png;base64,${branch.images}`}
            alt="imagen de sucursal"
            className="max-w-[35%] rounded-xl"
          />
          <div>
            <h2 className="text-left text-xl font-bold">{branch.name}</h2>
            <p className="mb-4 text-left text-sm">{branch.address}</p>
            <div className="flex gap-4 items-center">
              <p className="text-sm font-bold">
                Calificación: <span>* * * * *</span>
              </p>
              <p className="text-xs">
                <span>(57)</span> Ver reseñas
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="text-sm text-left font-bold">Servicios:</h2>
          <div className="flex flex-wrap gap-2">
            {branch.services.map((service, index) => (
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

        <div className="w-full mt-auto flex gap-2">
          <h2 className="text-left text-md font-bold">Capacidad Actual:</h2>
          <div className="w-[75%]  flex gap-2 items-center">
            <span>{branch.amount}</span>
            <div className="w-full h-4  bg-yellow-700 rounded-full overflow-hidden">
              <div
                className="h-4 bg-primary"
                style={{ width: `${(branch.amount / branch.capacity) * 100}%` }}
              ></div>
            </div>
            <span>{branch.capacity}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BranchCard;
