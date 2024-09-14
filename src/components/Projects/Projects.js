import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/campusbites.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="Campus Bites"
                  description="Campus Bites is a comprehensive university canteen system offering seamless integration of delivery, inventory management, report generation, and online ordering capabilities, providing a streamlined dining experience for students and faculty alike."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Merkado"
                  description="Merkado revolutionizes agricultural trading with its web-based bidding platform, empowering farmers to directly connect with buyers, bypassing intermediaries and fostering fairer trade practices while enhancing market access for agricultural produce."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="Tagum City Motorpool System"
                  description="Introducing the Tagum City Motorpool System, a comprehensive fleet management solution that offers real-time monitoring of vehicle locations, maintenance schedules, and fuel consumption, streamlining motorpool operations for the city government."

              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
