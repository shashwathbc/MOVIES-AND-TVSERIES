import React from "react";
import "./paginationcomp.css";
import Pagination from "@material-ui/lab/Pagination";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'

const PaginationComp = ({ setPage, numOfPages = 50 }) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagi">
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default PaginationComp;
