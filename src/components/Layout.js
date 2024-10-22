import React from 'react';
import MyNavbar from './MyNavbar';
import Slider from './Slider'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      <Slider />
      <Footer />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
