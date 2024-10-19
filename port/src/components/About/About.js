import React from 'react';
import "./About.css";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <div className='about-section'>
        <Container>
            <div className='about-heading text-center'>
              <h3>About Me</h3>
              <p>Know Me More <span className="heading-separator-line"></span></p>
            </div>
            <div className='about-me'>
              <Row>
                <Col md={6} lg={7} xl={8}>
                <h2>I'm <span>Sridhar</span>, a Web Developer</h2>
                  <p>Experienced Web Developer with over 5+ years in front-end and e-commerce development.
                     Proficient in HTML, CSS, JavaScript, and Bootstrap, I specialize in designing responsive 
                     and visually appealing websites. Skilled in creating custom WordPress themes, setting up
                      WooCommerce sites, and customizing Shopify stores, I help businesses build a strong online presence.
                  </p>
                  <p>
                      My focus is on delivering user-friendly, mobile-responsive websites that drive business growth. 
                      Additionally, I’m adept at website maintenance, debugging, and integrating new features seamlessly,
                      ensuring smooth and efficient functionality across all platforms.
                  </p>
                </Col>
                <Col md={6} lg={5} xl={4}>
                <div className="ps-lg-4">
                  <ul className="list-style-2">
                    <li className=""><span className="fw-600 me-2">Name:</span>Sridhar</li>
                    <li className=""><span className="fw-600 me-2">Email:</span><a href="mailto:sridhar14895@gmail.com">sridhar14895@gmail.com</a></li>
                  </ul>
                  <a href="#" className="btn btn-primary rounded-pill">Download CV</a> </div>
                </Col>
              </Row>
            </div>
            <div className="brands-grid separator-border mt-5">
            <Row>
                <Col md={4}>
                  <div className="featured-box text-center">
                    <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="10">5</span>+</h4>
                    <p className="mb-0">Years Experiance</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="featured-box text-center">
                    <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="250">30</span>+</h4>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </Col>
                <Col md={4}>
                <div className="featured-box text-center">
                  <h4 className="text-12 text-muted mb-0"><span className="counter" data-from="0" data-to="650">30</span>+</h4>
                  <p className="mb-0">Projects Done</p>
                </div>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About
