import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
import Contact from './components/Home/Contact';
import Growth from './components/Home/Growth';
import SpiritualGrowth from './components/Home/SpiritualGrowth';
import Compassion from './components/Home/Compassion';
import ContactUs from './components/Home/ContactUs';
import News from './components/Home/News';
import Gallery from './components/Home/Gallery';
import Video from './components/Home/Video';
import Footer from './components/Home/Footer';
import Terms from './components/Home/Terms'; 
import Privacy from './components/Home/Privacy'; 
import TimeLine  from './components/History/TimeLine';
import Books from './components/Books/Books';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/books" element={<Books />} />
          <Route path="/" element={
            <>
               <Header />
             <div id = 'about'>
              <Contact />
              </div>
             <Growth />
             <SpiritualGrowth />
             <Compassion />
             <div id = 'contact'>
              <ContactUs />
              </div>
              <News />
             <Gallery />
              <Video />
            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
