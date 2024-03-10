import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerGp from '../../assets/registerGp.png';
import './RegisterCTA.css';

const RegisterCTA = () => {
  return (
    <section id='register'>
        <div className="registerIcon">
            <img src={registerGp} alt="Register Icon" />
        </div>
        <Container>
            <Row className='registerInner align-items-center'>
                <Col lg={6} md={6}>
                    <div className="registerLeft">
                        <h5>Our Feature</h5>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                    </div>
                </Col>
                <Col lg={{span:5, offset:1}} md={6}>
                    <div className="registerRight">
                        <h4>Get Started for Free</h4>
                        <input type="email" placeholder='Email Address' />
                        <input type="email" placeholder='Password' />
                        <div className="register_button">
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default RegisterCTA