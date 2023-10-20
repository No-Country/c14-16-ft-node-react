import PropTypes from "prop-types";

function CardServices({ name, url }) {
  return (
    <>
      <div className="space-y-5 flex flex-col items-center p-14 relative">
        <div className=" ">
          <img src={url} alt={name} className="rounded-full w-full sm:w-72 " />
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
    </>
  );
}

CardServices.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardServices;
