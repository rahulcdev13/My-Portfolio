import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";


import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  // DiJava,
} from "react-icons/di";
import {
  // SiRedis,
  SiFirebase,
  // SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
 




function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
    </Row>
  );
}

export default Techstack;
