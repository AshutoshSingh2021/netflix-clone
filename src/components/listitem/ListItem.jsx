import React, { useState } from "react";
import "./listItem.scss";
import ListItemImg from "../../asset/img/item.jpg";
import Trailer from "../../asset/videos/trailer.mp4";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export default function ListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = Trailer;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && props.index * 225 - 50 + props.index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={ListItemImg} alt="" />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              maxime possimus sed voluptas corporis fugiat corrupti facere
              ullam? Laborum, labore.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
