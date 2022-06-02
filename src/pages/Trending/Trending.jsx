import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendContent from "../../components/TrendingContent/TrendContent";
import "./trending.css";
import PaginationComp from "../../components/pagination/PaginationComp";

const Trending = () => {
  const [trend, setTrend] = useState([]);

  const [page , setPage] = useState(1);

  const fetchTreanding = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=5efa4b075d423dc33f2099d2166c935c&page=${page}`
    );
    // console.log(data);
    setTrend(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTreanding();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">TRENDING TODAY</span>
      <div className="trendingMovies">
        {trend &&
          trend.map((c) => (
            <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type = {c.media_type}
              vote_average = {c.vote_average}
            />
          ))}
      </div>
      <PaginationComp setPage={setPage} />
    </div>
  );
};

export default Trending;
