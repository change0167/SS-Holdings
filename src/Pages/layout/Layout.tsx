// import React from 'react'
// import Home from '../Home/Home'
// import AboutUs from '../AboutUs/AboutUs'
// import Blogs from '../Blogs/Blogs'
// import FAQs from '../FAQs/FAQs'
// import ContactUs from '../ContactUs/ContactUs'
// import Projects from '../Projects/Projects'
// import Vastu from '../Vastu/Vastu'
// import Navbar from '../../navbar/Navbar'
// import './Layout.css';

// function Layout() {
//   return (
//     <>
//       <Navbar />

//       <main style={{ paddingTop: "10px" }}>
//         <a
//   href="https://wa.me/8919620939"  // ← replace with your number
//   className="whatsapp-float"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Chat on WhatsApp"
// >
//   💬
// </a>

//         <Home />
//         <AboutUs />
//         <Projects />
//         <Vastu />
//         <Blogs />
//         <FAQs />
//         <ContactUs />
//       </main>
//     </>
//   )
// }

// export default Layout



import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import './Layout.css';

function Layout() {
  return (
    <>
      <Navbar />

      {/* Space for fixed navbar */}
      <main style={{ paddingTop: "10px" }}>
        
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/8919620939"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>

        {/* ROUTED CONTENT GOES HERE */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
