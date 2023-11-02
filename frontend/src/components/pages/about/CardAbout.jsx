const CardAbout = ({ title, text, styles }) => {
  return (
    <div className={`w-full flex ${styles}`}>
      <article className="md:w-[45%] p-8 bg-[rgba(224,224,224,0.70)] rounded-xl md:text-md text-base mt-8">
        <h3 className="mb-4 text-black font-bold text-2xl font-roboto">
          {title}
        </h3>
        <p className="font-josefin">{text}</p>
      </article>
    </div>
  );
};

export default CardAbout;