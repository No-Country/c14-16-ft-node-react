import PropTypes from "prop-types";
import Utils from "../../libs/Utils";

function Input({ name, classInput, type, value, onChange, errors, place }) {
  return (
    <div className="">
      <input
        type={type}
        id={name}
        name={name}
        className={Utils(
          `w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary bg-gray-200 ${
            errors ? "border-red-500" : ""
          }`,
          classInput
        )}
        required
        value={value}
        onChange={onChange}
        placeholder={place}
      />
      {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  classInput: PropTypes.string,
  place: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.string,
};

export default Input;
