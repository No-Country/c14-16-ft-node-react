import PropTypes from "prop-types";

function Select({ name, values, options, onChange }) {
  return (
    <>
      <select
        name={name}
        id={name}
        className="bg-primary/50 px-4 py-3 border rounded-lg focus:outline-none focus:border-primary text-gray-600 font-medium outline-none w-full"
        onChange={onChange}
      >
        {values.map((val, index) => (
          <option key={index} value={val}>
            {options[index]}
          </option>
        ))}
      </select>
    </>
  );
}
Select.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
export default Select;
