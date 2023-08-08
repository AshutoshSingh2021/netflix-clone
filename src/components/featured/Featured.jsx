import React from "react";
import "./featured.scss";
import profileImg from "../../asset/img/beach-palmtrees-1361702.jpg";
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import InfoImg from "../../asset/img/movie.png";

const Featured = (props) => {
  console.log(props.type);
  return (
    <div className="featured">
      {props.type && (
        <div className="category">
          <span>{props.type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={profileImg} alt="featured" />

      <div className="info">
        <img src={InfoImg} alt="" />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ut.
          Exercitationem dignissimos praesentium iusto provident necessitatibus
          dolores nobis architecto obcaecati quisquam eum deserunt, in fuga
          eveniet placeat!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
