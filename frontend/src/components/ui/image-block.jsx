import Utils from "../../libs/Utils";
import PropTypes from "prop-types";
function ImageBlock({ url, clase }) {
  return (
    <section className="hidden  h-[90%] lg:flex flex-col justify-end bg-primary rounded-xl">
      <div>
        <img src={url} alt="" className={Utils(clase)} />
      </div>
    </section>
  );
}
ImageBlock.propTypes = {
  url: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
};

export default ImageBlock;
