import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Palette from "./components/Pallete";
import PaletteDetail from "./components/PaletteDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={
            <>
            <Header />
              <div className="pallete">
                <Palette paletteName="Material UI Colors" />
                <Palette paletteName="Flat UI Colors v1" />
                <Palette paletteName="Flat UI Colors Dutch" />
              </div>

              <div className="pallete">
                <Palette paletteName="Flat UI Colors American" />
                <Palette paletteName="Flat UI Colors Aussie" />
                <Palette paletteName="Flat UI Colors British" />
              </div>

              <div className="pallete">
                <Palette paletteName="Flat UI Colors Spanish" />
                <Palette paletteName="Flat UI Colors Indian" />
                <Palette paletteName="Flat UI Colors French" />
              </div>
            </>
          } />

          <Route path="/palette/:id" element={<PaletteDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
