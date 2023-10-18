import PropTypes from "prop-types";
import Utils from "../../libs/Utils";

function Label({ label, clase }) {
  return (
    <label
      htmlFor=""
      className={Utils("text-xl text-gray-600 font-semibold mb-4", clase)}
    >
      {label}
    </label>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  clase: PropTypes.string,
};

export default Label;
