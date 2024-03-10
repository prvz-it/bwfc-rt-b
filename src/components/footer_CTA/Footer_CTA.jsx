import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer_CTA.css';

const Footer_CTA = () => {
  return (
    <section id='footerCta'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={5} md={6}>
                    <div className="footerLeft">
                        <h5>Why Choose Us</h5>
                        <h2>Track your crypto portfolio on the best way possible</h2>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:2}} md={6}>
                    <div className="footerRight">
                        <input type="email" placeholder='Email Address' />
                        <input type="email" placeholder='Password' />
                        <div className="footer_button">
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer_CTA