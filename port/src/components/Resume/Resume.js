import React from 'react';
import './Resume.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

const Resume = () => {
    return (
        <div>
            <div className='tab-section' id='resume'>
                <Container>
                    <Row>
                    <div class="services-heading text-center"><h3>My Resume</h3><p>What I Did? <span class="heading-separator-line"></span></p></div>
                        <Tabs justify variant='pills' defaultActiveKey='tab-1' className='mb-1 p-0'>
                            <Tab eventKey='tab-1' title='Education'>
                                <div className='experience'>
                                    <div className='item'>
                                        <h5 className='company-name'>Jai Shriram Engineering College</h5>
                                        <div className='location'>
                                           Avinashipalayam, Tirupur.
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>B.E ECE</div>
                                            <div>2013 - 2017</div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <h5 className='company-name'>Bharathi Matric Higher Sec School</h5>
                                        <div className='location'>
                                           Vijayamangalam, Erode.
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>HSC</div>
                                            <div>2011 - 2013</div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <h5 className='company-name'>Govt High School</h5>
                                        <div className='location'>
                                           Avinashi, Tirupur.
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>SSLC</div>
                                            <div>2010 - 2011</div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey='tab-2' title='Skills'>
                               <div className='skills-tools'>
                                <Row>
                                <Col md={4}>
                                    <h3>Design Tools <span class="heading-separator-line"></span></h3>
                                    <ul className='tools'>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe Fireworks</li>
                                        <li>Adobe AfterEffects</li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <h3>Development Tools <span class="heading-separator-line"></span></h3>
                                    <ul className='tools'>
                                        <li>Sublime</li>
                                        <li>Vs Code</li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <h3>Development Skills <span class="heading-separator-line"></span></h3>
                                    <ul className='tools'>
                                        <li>HTML & CSS</li>
                                        <li>Bootstrap</li>
                                        <li>WordPress</li>
                                        <li>WooCommerce</li>
                                        <li>Shopify</li>
                                    </ul>
                                </Col>
                                </Row>
                               </div>
                            </Tab>
                            <Tab eventKey='tab-3' title='Experience'>
                                <div className='experience'>
                                    <div className='item'>
                                        <h5 className='company-name'>Young Globes Technologies Private Limited</h5>
                                        <div className='location'>
                                            Coimbatore
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>Sr.Web Developer</div>
                                            <div>Jan 2024 - Oct 2022</div>
                                        </div>
                                        <div>
                                            <ul className='fa-ul'>
                                            <li><strong>Theme Development &amp; Customization</strong>: Create and modify custom themes using HTML, CSS, JavaScript, and Twig to align with design specifications.</li>
                                            <li><strong>Responsive &amp; Cross-Browser Design</strong>: Ensure the website is mobile-friendly, responsive, and compatible across different browsers.</li>
                                            <li><strong>Template &amp; Module Integration</strong>: Customize Twig templates and integrate front-end components with Drupal modules (e.g., Views, Blocks).</li>
                                            <li><strong>Performance &amp; Accessibility</strong>: Optimize the site for fast load times, follow accessibility standards (WCAG), and implement SEO best practices.</li>
                                            <li><strong>Collaboration &amp; Version Control</strong>: Work with designers and backend developers, and use tools like Git for version control and efficient workflow management.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <h5 className='company-name'>MindMade Technologies</h5>
                                        <div className='location'>
                                            Coimbatore
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>Sr.Web Developer</div>
                                            <div>Dec 2022 - Jan 2024</div>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <h5 className='company-name'>texila educare healthcare and technology enterprises pvt ltd</h5>
                                        <div className='location'>
                                            Coimbatore
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>WordPress Developer</div>
                                            <div>Sept 2022 - Oct 2022</div>
                                        </div>
                                        <div>
                                            <ul className='fa-ul'>
                                                <li><strong>Theme Development and Customization</strong>: Creating and customizing WordPress themes using HTML, CSS, JavaScript, and PHP to ensure they align with design specifications and user requirements.</li>
                                                <li><strong>Responsive Design Implementation</strong>: Ensuring that the website is fully responsive and works seamlessly across different devices and screen sizes, optimizing for mobile, tablet, and desktop experiences.</li>
                                                <li><strong>User Interface (UI) Enhancements</strong>: Improving the user interface by developing interactive and visually appealing elements, using CSS animations, JavaScript, and other frontend technologies to enhance user engagement.</li>
                                                <li><strong>Cross-Browser Compatibility</strong>: Testing and ensuring the website functions properly on all major browsers (e.g., Chrome, Firefox, Safari, Edge) and troubleshooting any compatibility issues.</li>
                                                <li><strong>Performance Optimization</strong>: Optimizing the website for faster load times by minimizing CSS/JavaScript, optimizing images, and leveraging caching techniques to improve overall performance.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='item'>
                                        <h5 className='company-name'>MindMade Technologies</h5>
                                        <div className='location'>
                                            Coimbatore
                                        </div>
                                        <div className='job-info'>
                                            <div className='title'>Web Developer</div>
                                            <div>2019 - 2022</div>
                                        </div>
                                        <div>
                                            <ul className='fa-ul'>
                                            <li><strong>Website Development &amp; Maintenance</strong>: Develop, customize, and maintain websites using WordPress themes and plugins, as well as HTML, CSS, and JavaScript for creating responsive and visually appealing user interfaces.</li>
                                            <li><strong>Theme Customization &amp; Integration</strong>: Customize WordPress themes to match client requirements, including editing existing templates, integrating custom HTML, WordPress and Shopify and ensuring seamless design consistency.</li>
                                            <li><strong>Responsive Design Implementation</strong>: Ensure websites are fully responsive and provide a smooth user experience across various devices (desktops, tablets, and smartphones) by writing clean, efficient HTML and CSS code.</li>
                                            <li><strong>Cross-Browser Compatibility</strong>: Test and debug websites to ensure compatibility with multiple web browsers, addressing any issues with HTML and CSS inconsistencies across platforms.</li>
                                            <li><strong>Performance Optimization</strong>: Optimize website performance by reducing page load times, compressing images, minifying HTML/CSS/JS files, and implementing caching solutions to enhance the user experience.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey='tab-4' title='Project Links'>
                                <ul className='project-links'>
                                    <li><a href="https://archmatrix.org/" rel="noreferrer" target='_blank'>Archmatrix</a></li>                                    <li><a href="https://jeyakumarassociates.com/" rel="noreferrer" target='_blank'>Jeyakumar Associates</a></li>
                                    <li><a href="https://wellingtongymkhanaclub.co.in/" rel="noreferrer" target='_blank'>Wellington Gymkhana Club</a></li>
                                    <li><a href="https://www.rvsim.ac.in/" rel="noreferrer" target='_blank'>RVS Institute of Management Studies</a></li>                                    
                                    <li><a href="https://greenerg.in/" rel="noreferrer" target='_blank'>Greenerg Mobility &amp; Driving Future Mobility</a></li>
                                    <li><a href="https://pearlpackaging.com/" rel="noreferrer" target='_blank'>Pearl Packaging</a></li>
                                    <li><a href="https://vidhyaniketancbse.com/" rel="noreferrer" target='_blank'>Vidhya Niketan CBSE</a></li>
                                    <li><a href="https://whipupmagic.com/" rel="noreferrer" target='_blank'>Whipup Magic</a></li>
                                    <li><a href="https://online.syonaroots.com/" rel="noreferrer" target='_blank'>Online Syonaroots</a></li>
                                    <li><a href="https://mirakle.life/" rel="noreferrer" target='_blank'>Mirakle</a></li>
                                    <li><a href="https://djad.in/" rel="noreferrer" target='_blank'>Djad</a></li>
                                    <li><a href="https://babyyank.com/" rel="noreferrer" target='_blank'>Baby Yank</a></li>
                                    <li><a href="https://maxprofitness.in/" rel="noreferrer" target='_blank'>Maxpro Fitness</a></li>
                                    <li><a href="https://rvmtvs.com/" rel="noreferrer" target='_blank'>RVM TVS</a></li>
                                    <li><a href="https://tmgfashions.com/" rel="noreferrer" target='_blank'>TMG Fashions</a></li>
                                    <li><a href="https://automaxcoimbatore.com/" rel="noreferrer" target='_blank'>Automax Coimbatore</a></li>
                                    <li><a href="https://kaadhani.com/" rel="noreferrer" target='_blank'>Kaadhani</a></li>
                                    <li><a href="http://skandanapparels.com/ " rel="noreferrer" target='_blank'>Skandan Apparels</a></li>
                                    <li><a href="https://ksbuilders.net/" rel="noreferrer" target='_blank'>KS Builders</a></li>      
                                </ul>
                            </Tab>
                        </Tabs>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Resume;
