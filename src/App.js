import './App.css';
import Navbar from './components/Navbar'
import ServiceCarousel from './components/ServiceCarousel'
import Footer from './components/Footer'
import VanIsle from './images/lesly-derksen.jpg'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth perspective">
      <Navbar />
      <About />      
      <div className="image-container absolute top-0 w-full object-cover -z-10 contrast-50 grayscale">
        <img className="background" src={VanIsle} />
      </div>      
      <ServiceCarousel />      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
