import { BrowserRouter,Routes,Route } from "react-router-dom";
import Popular from "./Components/Popular";
import AnimeItem from "./Components/AnimeItem";
import Homepage from "./Components/Homepage";
import Gallery from "./Components/Gallery";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/anime-watchlist/" element={<Homepage/>}/>
      <Route path="/anime-watchlist/anime/:id"element={<AnimeItem/>}/>
      <Route path="/anime-watchlist/character/:id" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;