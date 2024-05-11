import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Chavan </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a software developer at Simplify Healthcare.
            <br />
            My current focus revolves around leveraging the latest React.js features to build scalable and maintainable frontend architectures. I'm enthusiastic about staying abreast of industry trends, continuously learning, and applying innovative solutions to enhance user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Rubix Cube
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure and Treakking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature PhotoGraphy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
