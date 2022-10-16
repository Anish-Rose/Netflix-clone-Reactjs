import { React, useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../Helpers/axios";
import request from "../../Helpers/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(request.getNetflixoriginals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    };
    getData();
  }, []);

  const trim = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}
      >
        <div className="banner_contents">
          <div className="bannerTitle">
            <h1>{movie.title || movie.name || movie.original_name}</h1>
          </div>
          <div className="bannerBtn">
            <button className="btn_play">Play</button>
            <button className="btn_list">My List</button>
          </div>
          <div className="bannerDesc">
            <p>{trim(movie?.overview, 250)}</p>
          </div>
        </div>
      </div>
      <div className="blenin-banner" />
    </div>
  );
};

export default Banner;
