// import React from 'react';
// import Layout from './Pages/layout/Layout';
// import { Route, Routes } from 'react-router-dom';
// import BlogDetail from './Pages/Blogs/BlogDetails';
// import ProjectDetail from './Pages/Projects/ProjectDetails';
// import VastuDetail from './Pages/Vastu/VastuDetail';

// const App = () => {
//   return (
//     <Routes>
//       {/* Landing page (single page sections) */}
//       <Route path="/" element={<Layout />} />

//       {/* Detail pages */}
//       <Route path="/blog/:id" element={<BlogDetail />} />
//       <Route path="/project/:id" element={<ProjectDetail />} />
//       <Route path="/vastu/:id" element={<VastuDetail />} />

//     </Routes>
//   );
// };

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/layout/Layout';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Projects from './Pages/Projects/Projects';
import Vastu from './Pages/Vastu/Vastu';
import Blogs from './Pages/Blogs/Blogs';
import FAQs from './Pages/FAQs/FAQs';
import ContactUs from './Pages/ContactUs/ContactUs';

import BlogDetail from './Pages/Blogs/BlogDetails';
import ProjectDetail from './Pages/Projects/ProjectDetails';
import VastuDetail from './Pages/Vastu/VastuDetail';
import Footer from './Pages/footer/Footer.tsx';

const App = () => {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>

        {/* Landing page (single scroll page) */}
        <Route
          index
          element={
            <>
              <Home />
              <AboutUs />
              <Projects />
              <Vastu />
              <Blogs />
              <FAQs />
              <ContactUs />
              <Footer/>
            </>
          }
        />

        {/* Detail pages (WITH NAVBAR) */}
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="project/:id" element={<ProjectDetail />} />
        <Route path="vastu/:id" element={<VastuDetail />} />

      </Route>
    </Routes>
  );
};

export default App;
