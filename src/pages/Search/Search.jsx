import React from "react";
import { useState , useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { createTheme } from '@material-ui/core/styles';
import { Button, Tab, Tabs, ThemeProvider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import "./search.css";
import axios  from 'axios';
import PaginationComp from "../../components/pagination/PaginationComp";
import TrendContent from "../../components/TrendingContent/TrendContent";

const Search = () => {
  const [type, setType] = useState(0);
  const [page , setPage] = useState(1);

  const [searchText , setSearchText] = useState("");
  const [content , setContent] = useState([]);
  const [numOfPages , setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary : {
        main : "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    if (!searchText) {
      return 
   }
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=5efa4b075d423dc33f2099d2166c935c&language=en-US&query=${searchText}&page=${page}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
       <ThemeProvider theme={darkTheme}>
         <div  className="search">
         <TextField 
          style={{flex: 1}}
          className = "searchBox"
          label="search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
      />
      <Button  variant="contained" style={{marginLeft : 10}}  onClick={fetchSearch} >  <SearchIcon/>  </Button>
         </div>
     
     <Tabs value={type} indicatorColor="primary" textColor="primary" 
       onChange={(event , newValue) => {
         setType(newValue);
         setPage(1);
       }}
     >
       <Tab style={{ width: "50%" }} label="Search Movies" />
       <Tab style={{ width: "50%" }} label="Search TV Series" />
     </Tabs>
      </ThemeProvider>
      <div className="trendingMovies">
        {content &&
          content.map((c) => (
            <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <PaginationComp setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default Search;
