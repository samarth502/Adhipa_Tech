import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutUs } from './components/about-us/about-us';
import { Blogs } from './components/resources/blogs/blogs';
import { Career } from './components/career/career';
import { CaseStudy } from './components/resources/case-study/case-study';
import { ContactUs } from './components/contact-us/contact-us';
import { DigitalMarketing } from './components/our-services/digital-marketing/digital-marketing';
import { Home } from './components/home/home';
import { ItConsulting } from './components/our-services/It-consulting/it-consulting';
import { MainFooter } from './common/main-footer';
import { MainHeader } from './common/main-header';
import { MobileDevelopment } from './components/our-services/mobile-development/mobile-development';
import { SoftwareTestingQA } from './components/our-services/software-testing-qa/software-testing-qa';
import { Technologies } from './components/technologies/technologies';
import { WebDevelopment } from './components/our-services/web-development/web-development';
import { BlogDetail } from './components/resources/blogs/components/components/blog-detail';
import { BlogProvider } from './components/resources/blogs/blog-context';
import { CaseProvider } from './components/resources/case-study/case-study-context';
import { CaseStudyDetail } from './components/resources/case-study/components/components/case-study-detail';

function App() {
  return (
    <Router>
      <MainHeader />

      <Routes>
        <Route
          path="/"
          element={
            <BlogProvider>
              <Home />
            </BlogProvider>
          }
        />
        <Route
          path="/our-services/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/our-services/mobile-development"
          element={<MobileDevelopment />}
        />
        <Route
          path="/our-services/software-testing-qa"
          element={<SoftwareTestingQA />}
        />
        <Route
          path="/our-services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/our-services/it-consulting" element={<ItConsulting />} />
        <Route path="/technologies" element={<Technologies />} />

        {/* Wrap only the blog-related routes with BlogProvider */}
        <Route
          path="/resources/blogs"
          element={
            <BlogProvider>
              <Blogs />
            </BlogProvider>
          }
        />
        <Route
          path="/resources/blogs/blog-detail/:id"
          element={
            <BlogProvider>
              <BlogDetail />
            </BlogProvider>
          }
        />

        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/resources/case-study"
          element={
            <CaseProvider>
              <CaseStudy />
            </CaseProvider>
          }
        />
        <Route
          path="/resources/case-study/case-study-detail/:id"
          element={
            <CaseProvider>
              <CaseStudyDetail />
            </CaseProvider>
          }
        />
      </Routes>

      <MainFooter />
    </Router>
  );
}

export default App;
