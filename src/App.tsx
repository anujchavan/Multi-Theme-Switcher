import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const App = () => (
  <Router>
    <Header />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;