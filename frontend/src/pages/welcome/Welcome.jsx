import backgroundImage from "../../assets/welcomeBackground.jpeg";

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <h1>Welcome to the Spacestagram</h1>
    </div>
  );
};

export default Welcome;
