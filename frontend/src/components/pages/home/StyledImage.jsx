const StyledImage = ({ imageSrc, customImageStyles, textStyles, text }) => {
    const containerStyle = {

    };


    const imageContainerStyle = {
        width: '100%',
    };

    const imageStyles = {
        maxWidth: '100%',
        height: 'auto',
    };

    return (
        <div className="rounded-lg  text-center" style={{ ...containerStyle, ...customImageStyles }}>
            <img src={imageSrc} alt="Styled Image" style={{ ...imageContainerStyle, ...imageStyles }} />
            <p style={textStyles}>{text}</p>
        </div>
    );
};

export default StyledImage;
