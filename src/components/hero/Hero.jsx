import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';
import hero_Gp1 from '../../assets/hero_Gp1.png';
import hero_Gp2 from '../../assets/hero_Gp2.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero'>
        <Container>
            <Row className='heroCon align-items-center'>
                <Col lg={6} md={6}>
                    <div className="heroLeft">
                        <h1>Managing business payments has never been easier</h1>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <div className="heroButton">
                            <Link>Get started</Link>
                            <Link>How it works</Link>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div className="heroRight">
                        <img src={heroImage} alt="Hero Image" />
                        <div className="heroImage_1">
                            <img src={hero_Gp1} alt="Hero_Gp1" />
                        </div>
                        <div className="heroImage_2">
                            <img src={hero_Gp2} alt="Hero_Gp2" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero