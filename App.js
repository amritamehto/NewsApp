// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom'
import News1 from './Components/News1';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/home" element={<News1 />}/>    
      </Routes>
      
      <Routes>
        <Route path="/news" element={<News />}/>    
      </Routes>

      <Routes>
        <Route path="/about" element={<About />}/>    
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}/>    
      </Routes>



    </div>
  );
}

export default App;
