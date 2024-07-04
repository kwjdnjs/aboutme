import "./../styles/home.css";
import crtImg from "./../images/crt.png";
import lpImg from "./../images/ab67616d0000b2738c4e95986c803791125e8991.jpeg";
import YouTube from "react-youtube";
import { useSelector, useDispatch } from "react-redux";
import { playing, pause } from "../features/youtube/youtubeSlice";
import { useEffect, useState } from "react";

function Home() {
  // Youtube
  const youtube = useSelector((state) => state.youtube.value);
  const dispatch = useDispatch();

  const videoId = "wuJIqmha2Hk";

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const onPlay = (event) => {
    dispatch(playing());
  };

  const onPause = (event) => {
    dispatch(pause());
  };

  const opts = {
    height: "200",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  // 애니메이션 효과 재생, 멈추기
  const [spin, setSpin] = useState({});
  useEffect(() => {
    if (youtube) {
      setSpin({});
    } else {
      setSpin({ animationPlayState: "paused" });
    }
  }, [youtube]);

  return (
    <div>
      <div className="main-container">
        <div className="img-container">
          <img className="crt-img" src={crtImg} alt="crt-img" />
          <div className="crt-text">Don't Panic!</div>
        </div>
        <h1>For all Hitchhiker to the Code</h1>
      </div>
      <div className="main-container">
        <h1>음악과 함께 시작해 볼까요?</h1>
        <div className="lp-record-container">
          <img className="lp-record" src={lpImg} alt="LP Record" style={spin} />
          <div className="lp-circle-large" />
          <div className="lp-circle-small" />
        </div>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
    </div>
  );
}

export default Home;
