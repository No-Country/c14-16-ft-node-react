import PropTypes from "prop-types";

function Select({ name, value, values, options, onChange }) {
  return (
    <>
      <select
        name={name}
        value={value}
        id={name}
        className="w-full p-4 bg-gray-200 border-b-2 border-[#333] rounded-md outline-none"
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