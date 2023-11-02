import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f0f0f0",
    };

    const titleStyle = {
        color: "#326ffc",
        fontSize: "36px",
        fontWeight: "bold",
        padding: "10px",
        textAlign: "center",
    };

    const imageStyle = {
        width: "100%",
        maxWidth: "700px",
        height: "auto",
    };

    const buttonStyle = {
        backgroundColor: "#326ffc",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
    };

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Oops, aquí no hay peluditos</h1>
            <img
                src='/assets/NotFoundImage.png?url'
                alt="NotFound"
                style={imageStyle}
            />
            <button
                style={buttonStyle}
                onClick={redirectToHome}
            >
                Ir a la página de inicio
            </button>
        </div>
    );
};

export default NotFound;