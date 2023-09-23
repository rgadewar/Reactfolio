import React from "react";
import ResumeDoc from "../../assets/small/Resume.docx";
// import "./Resume.css"; // Make sure the path to your CSS file is correct
import "../Resume/Resume.css";

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <div>
      <p>
        Download my{" "}
        <a href={ResumeDoc} download="resume.docx">
          resume
        </a>
      </p>
    </div>
    <section className="proficiencies">
      <h3>Front-end proficiencies:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    </section>
    <section className="proficiencies">
      <h3>Back-end proficiencies:</h3>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  </section>
);

export default Resume;
