import React from "react";
import Banner from "../../Components/Banner/Banner";
import MovieCards from "../../Components/MovieCards/MovieCards";
import Navbar from "../../Components/Navbar/Navbar";
import Request from "../../Helpers/Request";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <MovieCards title="Netflix Orginals" url={Request.getNetflixoriginals} />
      <MovieCards title="Trending Now" url={Request.getTrending} />
      <MovieCards title="Top Rated" url={Request.getTopRated} />
      <MovieCards title="Comedy Movies" url={Request.getComedyMovies} />
      <MovieCards title="Action Movies" url={Request.getActionMov} />
      <MovieCards title="Horror Movies" url={Request.getHorrorMovies} />
      <MovieCards title="Romance Movies" url={Request.getRomanceMovies} />
      <MovieCards title="Documentaries" url={Request.getDocumentaries} />
    </div>
  );
};

export default Home;
