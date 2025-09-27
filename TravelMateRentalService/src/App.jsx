import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
