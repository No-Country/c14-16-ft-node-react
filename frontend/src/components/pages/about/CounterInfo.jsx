import { useEffect, useState } from "react";

const CounterInfo = ({ topCounter, text }) => {
  const [counter, setCounter] = useState(0);

  console.log(topCounter);

  return (
    <div className="mb-8 md:mb-0">
      {" "}
      <h4 className="text-4xl text-center font-bold">
        <span>{counter}</span>
      </h4>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default CounterInfo;
