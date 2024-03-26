import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sponsor from "./components/Sponsor";
import About from "./components/About";
import ArtWork from "./components/ArtWork";
import Artist from "./components/Artist";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Sponsor />
        <About />
        <ArtWork />
        <Artist />
        <Collections />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
