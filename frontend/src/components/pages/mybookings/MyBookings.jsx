import BookCard from "./BookCard.jsx";

const MyBookings = () => {
  return (
    <div className="container mx-auto py-4 ">
      <table className="w-full">
        <thead className="text-white font-bold font-roboto bg-primary">
          <tr>
            <th className="py-4">Sucursal</th>
            <th className="py-4">Mascota</th>
            <th className="py-4">Fecha de entrada</th>
            <th className="py-4">Fecha de salida</th>
          </tr>
        </thead>
        <tbody>
          <BookCard />
          <BookCard />
          <BookCard />
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
