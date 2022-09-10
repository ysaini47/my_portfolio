import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cab.jpg";
import projImg2 from "../assets/img/cloud.jpg";
import projImg3 from "../assets/img/port.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Cab Application",
      description: "Android/ios application, developed using react-native with appropriate use of Google API's (Google Places,Distance Matrix API).",
      imgUrl: projImg1,
      Url:'https://github.com/ysaini47/CabApplication',
    },
    {
      title: "Cloud Storage",
      description: "Store any amount of data & retrieve it as often as you like. Safe, secure & flexible storage.",
      imgUrl: projImg2,
      Url:"https://github.com/ysaini47/CloudServicePlatform",
    },
    {
      title: "Portfolio Optimization",
      description: "A python program analyzing the market stock trends using the markowitz method.",
      imgUrl: projImg3,
      Url:"https://github.com/ysaini47/portfolio_optimization",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Creativity and Efficiency must co-exist for a project to be effective.The following our the projects I have designed and developed:</p>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </Row>

               </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
