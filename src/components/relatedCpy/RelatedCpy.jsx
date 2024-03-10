import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CpyLogo1 from '../../assets/CpyLogo1.png';
import CpyLogo2 from '../../assets/CpyLogo2.png';
import CpyLogo3 from '../../assets/CpyLogo3.png';
import CpyLogo4 from '../../assets/CpyLogo4.png';
import CpyLogo5 from '../../assets/CpyLogo5.png';
import CpyLogo6 from '../../assets/CpyLogo6.png';
import './RelatedCpy.css';

const RelatedCpy = () => {
  return (
    <section id='relatedCpy'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className="relatedCpyText">
                        <p>Over 7k+ software  businesses growing with RzkIT</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo1} alt="Company Logo 1" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo2} alt="Company Logo 2" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo3} alt="Company Logo 3" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo4} alt="Company Logo 4" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo5} alt="Company Logo 5" />
                    </div>
                </Col>
                <Col lg={2} md={2} sm={4} xs={4}>
                    <div className="relatedCpyLogo">
                        <img src={CpyLogo6} alt="Company Logo 6" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default RelatedCpy