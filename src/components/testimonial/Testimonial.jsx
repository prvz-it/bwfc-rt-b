import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Testimonial_1 from '../../assets/testimonial-1.png';
import Testimonial_2 from '../../assets/testimonial-2.jpg';
import Testimonial_3 from '../../assets/testimonial-3.jpg';
import TestimonialGp1 from '../../assets/testimonialGp1.png';
import TestimonialGp2 from '../../assets/testimonialGp2.png';
import TestimonialGp3 from '../../assets/testimonialGp3.png';
import { FaStar } from "react-icons/fa";
import './Testimonial.css';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='testimonial_next' onClick={onClick}><FaArrowLeftLong /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='testimonial_prev' onClick={onClick}><FaArrowRightLong /></div>
    );
  }

const Testimonial = () => {
    let settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
              }
            }
        ]
    };
  return (
    <section id='testimonial'>
        <Container>
            <Row>
                <Col lg={4} md={6} sm={9}>
                    <div className="testimonialTop">
                        <h4>Testimonials</h4>
                        <h2>Check what our clients are saying</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={7} md={6}>
                    <div className="testimonialCenLeft">
                        <Slider {...settings}>
                            <div className="testimonialImg01">
                                <img src={Testimonial_1} alt="Testimonial-1" />
                            </div>
                            <div className="testimonialImg01">
                                <img src={Testimonial_2} alt="Testimonial-2" />
                            </div>
                            <div className="testimonialImg01">
                                <img src={Testimonial_3} alt="Testimonial-3" />
                            </div>
                        </Slider>
                        <div className="testimonialGp1">
                            <img src={TestimonialGp1} alt="" />
                        </div>
                        <div className="testimonialGp2">
                            <img src={TestimonialGp2} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg={5} md={6}>
                    <div className="testimonialCenRight">
                        <img src={TestimonialGp3} alt="" />
                        <div className="testimonialText">
                            <h3>Save Time Managing Social Media For Your Business</h3>
                            <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly. Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
                            <FaStar className='starIcon' /><FaStar className='starIcon'/><FaStar className='starIcon'/><FaStar className='starIcon'/><FaStar className='starIcon'/>
                            <div className="testimonialDtl">
                                <h4>Angela Taylor</h4>
                                <p>CEO SAMSUNG</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial