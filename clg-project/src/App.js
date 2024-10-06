import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import BookingForm from './Pages/BookingForm';
import Header from './Pages/Header';
import GalleryTab from './Pages/GalleryTab';
import AboutUs from './Pages/AboutUs';
import Register from './Pages/Register';
import { useState } from 'react';
import Login from './Pages/Login';

function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleRegisterShow = () => setShowRegisterModal(true);
  const handleRegisterClose = () => setShowRegisterModal(false);
  const handleLoginClose = () => setShowLoginModal(false);
  const handleLoginShow = () => setShowLoginModal(true);
  return (
    <Router>
         <Header onRegisterClick={handleRegisterShow} onLoginClick={handleLoginShow} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/gallery" element={<GalleryTab />} />
      <Route path="/aboutUs" element={<AboutUs />} />
       {/* If you want to open a separate page for register */}
       <Route path="/register" element={<Register />} />
      </Routes>
      {/* Modal for Register */}
      <Register show={showRegisterModal} handleClose={handleRegisterClose} onLoginClick={handleLoginShow}/>
      <Login show={showLoginModal} handleClose={handleLoginClose} onRegisterClick={handleRegisterShow} />
  </Router>
  );
}

export default App;
