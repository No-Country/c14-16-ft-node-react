const Checkbox = ({ service, handleCheckboxChange, disabled }) => {
  return (
    <label
      htmlFor={service.id}
      className="flex justify-between items-center text-center"
    >
      <input
        id={service.id}
        type="checkbox"
        name={service.name}
        defaultChecked={false}
        value={service.name}
        disabled={disabled}
        className="mr-2"
        onChange={handleCheckboxChange}
      />
      {service.name}
      <img
        src={`data:image/png;base64,${service.image}`}
        alt={`icono de ${service.name}`}
        className="w-6 ml-2 bg-white rounded"
      />
    </label>
  );
};

export default Checkbox;
