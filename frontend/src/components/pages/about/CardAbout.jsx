
const CardAbout = ({ title, text, styles }) => {
  return (
    <div className={`w-full flex ${styles}`}>
      <article className="md:w-[45%] p-8 bg-[rgba(224,224,224,0.70)] rounded-xl">
        <h3 className="mb-8 text-black font-bold text-4xl">{title}</h3>
        <p className="">{text}</p>
      </article>
    </div>
  );
};

export default CardAbout;
