import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
