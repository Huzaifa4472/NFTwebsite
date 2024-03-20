import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sponsor from "./components/Sponsor";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Sponsor />
      </BrowserRouter>
    </>
  );
}

export default App;
