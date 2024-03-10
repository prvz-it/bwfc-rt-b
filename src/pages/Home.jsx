import React from 'react';
import Hero from '../components/hero/Hero';
import RelatedCpy from '../components/relatedCpy/RelatedCpy';
import Feature from '../components/feature/Feature';
import RegisterCTA from '../components/registerCTA/RegisterCTA';
import ContentTec from '../components/contentTec/ContentTec';
import Testimonial from '../components/testimonial/Testimonial';
import Section_CTA from '../components/section_CTA/Section_CTA';
import Finance from '../components/finance/Finance';

const Home = () => {
  return (
    <>
        <Hero/>
        <RelatedCpy/>
        <Feature/>
        <RegisterCTA/>
        <ContentTec/>
        <Testimonial/>
        <Section_CTA/>
        <Finance/>
    </>
  )
}

export default Home