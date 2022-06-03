import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PaginationComp from "./../../components/pagination/PaginationComp";
import TrendContent from "./../../components/TrendingContent/TrendContent";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);


  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5efa4b075d423dc33f2099d2166c935c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">MOVIES LIST</span>
      <div className="trendingMovies">
        {movies &&
          movies.map((c) => (
            <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <PaginationComp setPage={setPage} />
    </div>
  );
};

export default Movies;
