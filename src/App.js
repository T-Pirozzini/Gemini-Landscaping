import Navbar from './components/Navbar'
import ServiceCarousel from './components/ServiceCarousel'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import VanIsle from './images/vanIsle.jpg'

function App() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center">      
      <Navbar />
      <img src={VanIsle} />
    </div>
    <div className="min-h-screen flex justify-center items-center">
      <h1>TESTINF</h1>

    </div>
    {/* <About />     */}
    {/* <ServiceCarousel />       */}
    {/* <Contact /> */}
    {/* <Footer /> */}
    </>
  );
}

export default App;
