import './App.css';
import Navbar from './components/Navbar'
import ServiceCarousel from './components/ServiceCarousel'
import Footer from './components/Footer'
import VanIsle from './images/lesly-derksen.jpg'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app h-screen overflow-y-auto overflow-x-hidden perspective">
      <Navbar />
      <About />      
      <div className="image-container">
        <img className="background" src={VanIsle} />
      </div>      
      <ServiceCarousel />      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
