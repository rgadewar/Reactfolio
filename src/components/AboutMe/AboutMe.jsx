import React from "react";
import "../AboutMe/AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
    return (
<div className="container-fluid" id="AboutMeCont">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row">
                <div className="col-lg-3">
                    <img className="img img-thumbnail" alt="myPicture" src="../Images/Rupa1.png"/>  
                </div>
                <div className="col-lg-9" id="aboutmep">
                    <p>Hello, my name is Rupa Gadewar, I´m studying to become a Full Stack Web Developer.</p>
                    <p>I´m currently studying Austin's Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
                    <p>Thank you for exploring my portfolio.</p>
                    <p>I've included some of my favorite projects as well as my contact information. I look forward to hearing from you soon!</p>
                    
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}

export default AboutMe;
