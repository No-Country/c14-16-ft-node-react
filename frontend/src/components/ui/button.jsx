import PropTypes from "prop-types";

function Button({ type, label }) {
  return (
    <button
      type={type}
      className="bg-primary text-white w-full rounded-lg py-3 my-5 font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary  transition-colors duration-300 "
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
