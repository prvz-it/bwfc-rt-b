import React from 'react';
import Menu from '../menu/Menu';
import { Outlet } from 'react-router-dom';
import Footer_CTA from '../footer_CTA/Footer_CTA';
import Footer from '../footer/Footer';
import FooterCopy from '../footerCopy/FooterCopy';

const Layout = () => {
  return (
    <>
     <Menu/>
     <Outlet/>
     <Footer_CTA/>
     <Footer/>
     <FooterCopy/>
    </>
  )
}

export default Layout