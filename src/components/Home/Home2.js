import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram, AiFillFacebook,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, I'm Lowell Jay Orcullo, a dedicated backend developer passionate about crafting robust solutions to power seamless digital experiences.
              <br />
              <br />I am quite adept to
              <i>
                <b className="purple"> Java, PHP, MySQL, CSS, HTML and Python. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for
              with <b className="purple">Web Development</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Web Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/torbuloloy"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/lowelljay.orcullo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook/>
                </a>

              </li>
              <li className="social-icons">
                <a
                    href="https://www.instagram.com/ljsaucefries/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
