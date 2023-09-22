import React from "react";
import { Link } from "react-router-dom";
import "../Carousel/Carousel.css"

function Carousel() {
    return (
        <div className="container-fluid" id="carouselcontainer">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../Images/logo11.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h1 className="display-2">RupaG Web Design</h1>
                        {/* <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" role="button" id="button1">Get in Touch!</a> */}
                        <Link to="/contact" className="btn btn-outline-light btn-lg" role="button" id="button1">Get in Touch!</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../Images/web.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h1 className="display-2">Full Stack Developer</h1>
                        {/* <a href="/portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" role="button" id="button2">Know my Work!</a> */}
                        <Link to="/portfolio" className="btn btn-outline-light btn-lg" role="button" id="button2">Know my Work!</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../Images/Code.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h1 className="display-2" id="responsive">Responsive Web Design</h1>
                        {/* <a href="/portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" role="button" id="button3">Check It Out!</a> */}
                        <Link to="/portfolio" className="btn btn-outline-light btn-lg" role="button" id="button3">Check It Out!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default  Carousel;