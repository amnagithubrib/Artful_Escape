import React from 'react';
import MyNavbar from './MyNavbar';
import Slider from './Slider'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      <Slider />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
