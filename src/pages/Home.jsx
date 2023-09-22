import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Carousel from '../components/Carousel/Carousel';
import AboutMe from "../components/AboutMe/AboutMe";

function Home() {
    return(
        <div className="container-fluid">
            <Navbar/>
            <Carousel/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default Home;
