import PropTypes from "prop-types";

function Input({ name, type, label, value, onChange, errors }) {
  return (
    <div className="">
      <label htmlFor={type} className="block text-gray-600 font-medium ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary bg-gray-200 ${
          errors ? "border-red-500" : ""
        }`}
        required
        value={value}
        onChange={onChange}
      />
      {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.string,
};

export default Input;
