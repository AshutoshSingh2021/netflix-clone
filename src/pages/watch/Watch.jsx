import React from "react";
import "./watch.scss";
import video from "../../asset/videos/trailer.mp4";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={video} />
    </div>
  );
}
