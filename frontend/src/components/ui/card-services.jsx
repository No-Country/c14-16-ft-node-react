import PropTypes from "prop-types";

function CardServices({ name, url }) {
  return (
    <>
      <div className="space-y-5 flex flex-col items-center p-10 justify-center">
        <div className=" ">
          <img
            src={url}
            alt={name}
            className="rounded-full w-[90%] sm:w-[200px] shadow-3xl shadow-primary mx-auto"
          />
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
