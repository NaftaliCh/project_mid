import './App.css';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Buttonstart from './components/buttonstart/Buttonstart'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Review from './components/review/Review'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
     
     
     <div class="wrapper">
           <Sidebar/>
            <div class="content">
                {/* Header Start */}
                 <Header/>
                {/* Header End */}
                
                {/* Large Button Start */}
                 <Buttonstart/>
                {/* Large Button End */}
                
                {/* About Start */}
                 <About/>
                {/* About End */}
                
                {/* Education Start */}
                 <Education/>
                {/* Education Start */}
                 
                {/* Experience Start */}
                <Experience/>
                {/* Experience Start */}
                
                {/* Service Start */}
                 <Service/>
                {/* Service Start */}
                
                {/* Portfolio Start */}
                 <Portfolio/>
                {/* Portfolio Start */}
                
                {/* Review Start */}
                 <Review/>
                {/* Review End */}
                
                {/* Contact Start */}
                 <Contact/>
                {/* Contact End */}
                
                {/* Footer Start */}
                 <Footer/>
                {/* Footer Start */}
            </div>
        </div>
        
        {/* Back to Top */}
        <a href="#" class="back-to-top"><i class="fa fa-angle-double-up"></i></a>
        

    </>

  );
}

export default App;
