import "./../styles/home.css";
import crtImg from "./../images/crt.png";

function Home() {
  return (
    <main className="main-container">
      <div className="img-container">
        <img className="crt-img" src={crtImg} alt="Centered Image" />
        <div className="crt-text">Don't Panic!</div>
      </div>
    </main>
  );
}

export default Home;
