import React, { useState, useEffect, useRef } from "react";
import axios from "../../Helpers/axios";
import "./MovieCards.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const MovieCards = ({ title, url }) => {
  const [movies, setMovie] = useState([]);
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef("");

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(url);
      setMovie(request.data.results);
    };
    fetchMovie();
  }, [url]);

  return (
    <div className="cards_container">
      <h2>{title}</h2>
      <div ref={rowRef} className="cards">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="card_img"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title || movie.original_name}
          />
        ))}
      </div>
      <div
        className="carousel-icons-right"
        onClick={() => handleClick("right")}
      >
        <AiOutlineArrowRight size={50} color="white" className="arrow-right" />
      </div>
      <div
        className={`carousel-icons-left ${!isMoved && "hidden"}`}
        onClick={() => handleClick("left")}
      >
        <AiOutlineArrowLeft size={50} color="white" className="arrow-left" />
      </div>
    </div>
  );
};

export default MovieCards;
