import React from 'react';
import './Resume.css';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

const Resume = () => {
  return (
    <div>
        <div className='tab-section'>
            <Container>
                <Row>
                    <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
                        <Tab eventKey="tab-1" title="Tab 1">
                            Tab 1 Content
                        </Tab>
                        <Tab eventKey="tab-2" title="Tab 2">
                            Tab 2 Content
                        </Tab>
                        <Tab eventKey="tab-3" title="Tab 3">
                            Tab 3 Content
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Resume
