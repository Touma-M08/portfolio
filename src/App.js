import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainVisual from "./components/MainVisual";

function App() {
  return (
    <div className="App">
      <MainVisual />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
