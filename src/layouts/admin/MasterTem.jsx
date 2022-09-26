import React from 'react';

import '../../assests/admin/css/styles.css';
import '../../assests/admin/js/scripts';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';

const MasterTem = () => {
  return (
    <div className="sb-nav-fixed">

          <Navbar />

          <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main> 
                    Hello
                </main>
                <Footer />
            </div>

          </div>

    </div>
  )
}

export default MasterTem