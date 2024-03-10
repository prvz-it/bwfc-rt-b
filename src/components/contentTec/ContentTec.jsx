import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import contentImg from '../../assets/contentImg.png';
import contentGp1 from '../../assets/contentGp1.png';
import contentGp2 from '../../assets/contentGp2.png';
import './ContentTec.css';

const ContentTec = () => {
  return (
    <section id='contentTec'>
        <Container>
            <Row className='contentTecInner align-items-center'>
                <Col lg={5} md={6}>
                    <div className="contentTecLeft">
                        <h5>Our Feature</h5>
                        <h2>All payments are linked to your Finances account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                        <div className="contentTec_button">
                            <Link>Get Started</Link>
                        </div>
                    </div>
                </Col>
                <Col lg={{span:6, offset:1}} md={6}>
                    <div className="contentTecRight">
                        <img src={ contentImg } alt="Content Image" />
                        <div className="contentTec_Img1">
                            <img src={ contentGp1 } alt=" content gp-1" />
                        </div>
                        <div className="contentTec_Img2">
                            <img src={ contentGp2 } alt=" content gp-2" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ContentTec