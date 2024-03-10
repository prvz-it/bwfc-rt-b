import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterCopy.css';

const FooterCopy = () => {
  return (
    <section id='footerCopy'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={5} md={8}>
                    <div className="footerCopyrightL">
                        <h4>All rights reserved.<span>(Prvz-IT) 2024</span></h4>
                        <ul>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Terms of Services</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={6}>
                    <div className="footerCopyrightR">
                        <h4>Supported by:Rzk-It</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default FooterCopy