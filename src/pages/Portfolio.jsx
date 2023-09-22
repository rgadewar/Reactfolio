import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Info from "../components/info.json";
import "../pages/Portfolio.css";

function Portfolio() {
    return(
        <div>
            <Navbar
                about="/"/>
            <div className="container">
                <h1 className="display-4" id="disp4">Portfolio</h1>
                <hr className="light" color="white"/>
                <div className="flexbox-container" id="linksPortfolio">
                    {Info.map(data => {
                    return <Card
                        key={data.id}
                        src={data.src}
                        alt={data.alt}
                        title={data.title}
                        link={data.link}
                        button={data.button}
                        />
                    })}
                    
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Portfolio