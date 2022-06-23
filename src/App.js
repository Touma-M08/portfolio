import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <MainVisual />
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/skill" element={<Skill />} />

          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
