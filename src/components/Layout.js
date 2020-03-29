import React from 'react';

import Navbar from './Navbar';
// import Footer from './Footer';
// import Header from './Header';
// import Contenido from './Excursion';

function Layout(props) {
    // const children = props.children;
  
    return (
      <React.Fragment>
        <Navbar />

        {props.children}
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
export default Layout;