import PropTypes from "prop-types";
import Utils from "../../libs/Utils";

function Button({ type, label, clase }) {
  return (
    <button
      type={type}
      className={Utils(
        "text-gray-100 text-lg w-full md:max-w-[350px] rounded-lg py-3 my-5 font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300 bg-primary",
        clase
      )}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clase: PropTypes.string,
};

export default Button;
