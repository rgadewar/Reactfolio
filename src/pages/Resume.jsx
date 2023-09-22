import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import Resume from "../components/Resume/Resume";

function Portfolio() {
    return(
        <div>
            <Navbar
                about="/"/>
            <Resume />
            <Footer/>

        </div>
    )
}

export default Portfolio