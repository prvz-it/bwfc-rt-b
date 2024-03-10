import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import featureImg from '../../assets/featureImg.png';
import featureInner1 from '../../assets/featureInner1.png';
import featureInner2 from '../../assets/featureInner2.png';
import featureGp1 from '../../assets/featureGp1.png';
import featureGp2 from '../../assets/featureGp2.png';
import './Feature.css';

const Feature = () => {
  return (
    <section id='feature'>
        <Container>
            <Row className=' featureCen align-items-center'>
                <Col lg={6} md={6}>
                    <div className="featureLeft">
                        <img src={ featureImg } alt="Feature Image" />
                        <div className="featureImage1">
                            <img src={ featureInner1 } alt="Feature Inner1" />
                        </div>
                        <div className="featureImage2">
                            <img src={ featureInner2 } alt="Feature Inner2" />
                        </div>
                        <div className="featureImage3">
                            <img src={ featureGp1 } alt="Feature Gp1" />
                        </div>
                        <div className="featureImage4">
                            <img src={ featureGp2 } alt="Feature Gp2" />
                        </div>
                    </div>
                </Col>
                <Col lg={{span:5, offset:1}} md={6}>
                    <div className="featureRight">
                        <h4>Our Feature</h4>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <div className="featureButton">
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature