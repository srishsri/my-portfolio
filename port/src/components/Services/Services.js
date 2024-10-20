import React from 'react'
import './Services.css'
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <div>
        <div className='services bg-light' id='services'>
            <Container>
                <div className='services-heading text-center'>
                    <h3>Services</h3>
                    <p>What I Do? <span className="heading-separator-line"></span></p>
                </div>
                <Row>
                    <Col md={6} className='feature-box'>
                        <div class="featured-boxs style-3 mb-5">
                            <div class="featured-box-icon text-primary bg-white shadow-sm rounded"> <i class="fas fa-palette"></i> </div>
                            <h3>Web Development</h3>
                            <p class="mb-0">
                                Our web development services focus on creating dynamic and responsive websites tailored to 
                                meet your business needs. Using the latest technologies and best practices, we ensure your site is not 
                                only visually appealing but also user-friendly, providing an exceptional experience for your visitors.
                            </p>
                        </div>
                        <div class="featured-boxs style-3 mb-5">
                            <div class="featured-box-icon text-primary bg-white shadow-sm rounded"> <i class="fas fa-palette"></i> </div>
                            <h3>E-Commerce Development</h3>
                            <p class="mb-0">
                                We specialize in e-commerce development, building robust online stores that drive sales and enhance 
                                customer engagement. Our solutions are designed to streamline the buying process, from user-friendly 
                                product displays to secure payment gateways, ensuring a seamless shopping experience for your customers.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className='feature-box'>
                        <div class="featured-boxs style-3 mb-5">
                            <div class="featured-box-icon text-primary bg-white shadow-sm rounded"> <i class="fas fa-palette"></i> </div>
                            <h3>Shopify Development</h3>
                            <p class="mb-0">
                                Our Shopify development services help you create stunning and high-performing online stores.
                                With expertise in theme customization, app integration, and optimizing store functionality,
                                we empower your business to thrive in the competitive e-commerce landscape while providing 
                                a great shopping experience.
                            </p>
                        </div>
                        <div class="featured-boxs style-3 mb-5">
                            <div class="featured-box-icon text-primary bg-white shadow-sm rounded"> <i class="fas fa-palette"></i> </div>
                            <h3>Web Application Development</h3>
                            <p class="mb-0">
                                We offer comprehensive web application development services that cater to various business needs.
                                Our team develops scalable and efficient applications, focusing on functionality, security, and user 
                                experience to help you streamline operations and enhance productivity.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Services
