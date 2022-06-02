import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Footer/Footer";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movi/Movies";
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route exact path="/" element={<Trending/>}  />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
