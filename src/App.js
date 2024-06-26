import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Activity from './components/Activity';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Features />
      <About />
      <Activity />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
