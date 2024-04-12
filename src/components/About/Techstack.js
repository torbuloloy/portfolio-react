import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,

    DiPython,
    DiGit,
    DiJava, DiPhp, DiLaravel, DiAndroid, DiHtml5,
} from "react-icons/di";
import {SiGit, SiJavascript, SiLaravel, SiPhp} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
