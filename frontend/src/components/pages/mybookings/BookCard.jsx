import { format } from "date-fns";

const BookCard = ({booking}) => {

  const from_date = format(new Date(booking.from_date), "dd-MM-yyyy");
  const to_date = format(new Date(booking.to_date), "dd-MM-yyyy");
  return (
    <tr className="border-b-2 border-primary">
      <td className="py-2 text-center text-md font-josefin">{booking.branch.name}</td>
      <td className="text-center text-md font-josefin">{booking.branch.address}</td>
      <td className="text-center text-md font-josefin">{booking.pet.name}</td>
      <td className="text-center text-md font-josefin">{from_date}</td>
      <td className="text-center text-md font-josefin">{to_date}</td>
      <td className="text-center text-md font-josefin">{booking.price}</td>
    </tr>
  );
};

export default BookCard;
