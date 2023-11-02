import PropTypes from "prop-types";
import Utils from "../../libs/Utils";

function Label({ label, clase }) {
  return (
    <label
      htmlFor=""
      className={Utils("text-md text-gray-600 font-semibold mb-2", clase)}
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