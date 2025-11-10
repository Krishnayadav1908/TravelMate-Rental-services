import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { VehiclePage } from "./pages/Vehiclepage";
import { Signin } from "./pages/Signin";

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
          <Route path="/signin" element={<Signin/>} />
          <Route path="/vehicle" element={<VehiclePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
