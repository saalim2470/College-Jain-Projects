import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import BookingForm from './Pages/BookingForm';
import Header from './Pages/Header';
import GalleryTab from './Pages/GalleryTab';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/gallery" element={<GalleryTab />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  </Router>
  );
}

export default App;
