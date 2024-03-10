import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Section_CTA.css';
import { Link } from 'react-router-dom';

const Section_CTA = () => {
  return (
    <section id='sectionCTA'>
        <Container>
            <Row className='sectionCTA_main align-items-center'>
                <Col lg={9} md={8} sm={12}>
                    <div className="sectionCTA_left">
                        <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <div className="sectionCTA_button">
                        <Link>Get Started</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section_CTA