import "./../styles/home.css";
import crtImg from "./../images/crt.png";
import LpPlayer from "../components/LpPlayer";

function Home() {
  return (
    <div>
      <div className="main-container">
        <div className="img-container">
          <img className="crt-img" src={crtImg} alt="crt-img" />
          <div className="crt-text">Don't Panic!</div>
        </div>
        <h1 className="main-text">
          For All the Hitchhikers on the Code Journey
        </h1>
      </div>
      <div className="main-container">
        <h1 className="main-text">음악과 함께 시작해 볼까요?</h1>
        <LpPlayer />
      </div>
      <div className="main-container">
        <h1>About Me</h1>
      </div>
    </div>
  );
}

export default Home;
