import React from 'react';
import { Col } from 'react-bootstrap';

const Finance_Reusable = ({title, prg}) => {
  return (
    <Col lg={6}>
        <div className="financeBox">
            <div className="financeIcon"></div>
            <h3>{title}</h3>
            <p>{prg}</p>
        </div>
    </Col>
  )
}

export default Finance_Reusable