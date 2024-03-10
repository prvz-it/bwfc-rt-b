import React from 'react';
import Finance_Reusable from '../reusable/Finance_Reusable';
import { Col, Container, Row } from 'react-bootstrap';
import FinanceImg from '../../assets/finance.png';
import './Finance.css';

const Finance = () => {
  return (
    <section id='finance'>
        <div className="financeImage"> 
            <img src={FinanceImg} alt="Finance Image" />
        </div>
        <Container>
            <div className="financeMain">
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <div className="financeTop">
                            <h4>Why Finance</h4>
                            <h2>Why Choose Us</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Finance_Reusable title='No Extra Fee' prg='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
                    <Finance_Reusable title='No Extra Fee' prg='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
                    <Finance_Reusable title='No Extra Fee' prg='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
                    <Finance_Reusable title='No Extra Fee' prg='End-to-end payments and financial management in a single solution. Meet the right platform.'/>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Finance