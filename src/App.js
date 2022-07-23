import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import VanIsle from './images/lesly-derksen.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />      
      <div className="image-container">
        <img src={VanIsle} />
      </div>
      <Main />
    </div>
  );
}

export default App;
