import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/footerLogo.png';
import './Footer.css';

const Footer = () => {
  return (
    <section id='footer'>
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="footerBox1">
                        <img src={footerLogo} alt="Footer_Logo" />
                        <p>Yet bed any for travel assistance indulgence is unpleasing. Not thoughts, all exercise blessing. Indulgence means everything: joy, alteration, boisterousness, and attachment.</p>
                    </div>
                </Col>
                <Col lg={{span:2, offset:1}} md={4} sm={4} xs={4}>
                    <div className="footerBox2">
                        <h3>Company</h3>
                        <ul>
                            <li><Link>About Us</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Pricing</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={4} xs={4}>
                    <div className="footerBox2">
                        <h3>Product</h3>
                        <ul>
                            <li><Link>Invoicing Platform</Link></li>
                            <li><Link>Accounting Platform</Link></li>
                            <li><Link>Create Proposal</Link></li>
                            <li><Link>Contracts</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={4} xs={4}>
                <div className="footerBox2">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link>Proposal Template</Link></li>
                            <li><Link>Invoice Template</Link></li>
                            <li><Link>Tutorial</Link></li>
                            <li><Link>How to write contract</Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer