import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lowell Jay Orcullo </span>
            from <span className="purple"> Tagum City, Philippines</span>
            <br />
            <br />
            I am currently a 4th year BSIT student at the University of Southeastern Philippines.
            <br />
            I am also looking for a company that might be willing to train and make me a part of.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Through Christ All Things Are Possible!"{" "}
          </p>
          <footer className="blockquote-footer">LJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
