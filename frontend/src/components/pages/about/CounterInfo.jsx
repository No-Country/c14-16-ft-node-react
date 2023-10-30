import CountUp from "react-countup";

const CounterInfo = ({ topCounter, text }) => {
  return (
    <div className="mb-8 md:mb-0">
      {" "}
      <h4 className="text-4xl text-center font-bold font-roboto">
        <CountUp start={0} end={topCounter} duration={2} delay={0} />
      </h4>
      <p className="text-center font-josefin">{text}</p>
    </div>
  );
};

export default CounterInfo;
