import React from "react";
import "../AboutMe/AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="container-fluid" id="AboutMeCont">
      <div className="container padding" id="jumbo">
        <div className="jumbotron">
          <h1 className="display-4" id="About">
            About Me{" "}
          </h1>
          <hr className="light" color="black" />

          <div className="row">
            <div className="col-lg-3">
              <img
                className="img img-thumbnail"
                alt="myPicture"
                src="../Images/Rupa1.png"
              />
            </div>
            <div className="col-lg-9" id="aboutmep">
              <p>
                My name is Rupa Gadewar, and I'm on the path to becoming a Full
                Stack Web Developer. I'm currently enrolled in Austin's Coding
                BootCamp, where I've been immersed in a wide range of
                technologies and concepts. My journey has led me to explore and
                gain proficiency in HTML5, CSS, JavaScript, Node.js, Express,
                MySQL, MongoDB, and React.
              </p>
              <p>
                Within my portfolio, you'll discover some of the projects I'm
                particularly proud of. They reflect the culmination of my hard
                work and dedication. Additionally, I've provided my contact
                information for your convenience.
              </p>
              <p>
                I'm eagerly looking forward to any potential opportunities,
                collaborations, or discussions that may come my way. Please
                don't hesitate to reach out—I'm always open to new connections
                and exciting prospects.
              </p>
              Thank you for taking the time to explore my portfolio. Your
              interest is greatly appreciated.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
