import Navbar from './components/Navbar'
import ServiceCarousel from './components/ServiceCarousel'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { Parallax } from 'react-parallax';

function App() {
  return (
     
    <>          
      <Navbar /> 
      <Parallax bgImage={'/vanIsle.jpg'} strength={500}>      
      <About />
      </Parallax>  
      
      <ServiceCarousel />  
      
          
      <Contact />
       
      <Footer />
    </>
     
  );
}

export default App;
