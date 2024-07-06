import "./../styles/lpPlayer.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { pause, playing } from "../features/youtube/youtubeSlice";
import lpImg from "./../images/ab67616d0000b2738c4e95986c803791125e8991.jpeg";

function LpPlayer() {
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
    width: "400",
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
    <>
      <div className="lp-record-container">
        <img className="lp-record" src={lpImg} alt="LP Record" style={spin} />
        <div className="lp-circle-large" />
        <div className="lp-circle-small" />
      </div>
      <YouTube
        className="youtube-player"
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onPlay={onPlay}
        onPause={onPause}
      />
    </>
  );
}

export default LpPlayer;
