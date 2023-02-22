import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  function callBanner() {
    axios.get(requests.fetchNetflixOriginals)
      .then(a => {
        setMovie(a.data.results[Math.floor(Math.random() * 19)])
        //console.log(a.data.results[0]);
      })
  }

  useEffect(() => {
    callBanner();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundPosition: 'center center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="banner__description">
            {movie?.overview}
          </p>
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lists</button>
        </div>
      </header>
    </div>
  );

};

export default Banner;
