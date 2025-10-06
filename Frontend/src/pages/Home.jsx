import Topbar from "../components/Topbar";
import Feature from "./Feature";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import VehicleHome from "./VehicleHome";

function Home(){
    return <>
    <Topbar/>
    <Hero/>
    <Feature/>
    <VehicleHome/>
    <Testimonials/>
    <Footer/>
    </>
}

export default Home;