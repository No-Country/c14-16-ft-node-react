import Utils from "../../libs/Utils";
import PropTypes from "prop-types";
function ImageBlock({ url, clase, claseSection }) {
  return (
    <section
      className={Utils(
        "hidden lg:flex flex-col justify-end bg-gradient-to-r from-primary via-orange-300 to-orange-100/50 rounded-xl",
        claseSection
      )}
    >
      <div>
        <img src={url} alt="" className={Utils(clase)} />
      </div>
    </section>
  );
}
ImageBlock.propTypes = {
  url: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
  claseSection: PropTypes.string.isRequired,
};

export default ImageBlock;
