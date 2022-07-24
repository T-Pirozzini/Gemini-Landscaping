import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import ServiceCarousel from './components/ServiceCarousel'
import Footer from './components/Footer'
import VanIsle from './images/lesly-derksen.jpg'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />      
      <div className="image-container">
        <img src={VanIsle} />
      </div>
      {/* <Main /> */}
      <ServiceCarousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
