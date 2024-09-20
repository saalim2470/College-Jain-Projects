import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import BookingForm from './Pages/BookingForm';
import Header from './Pages/Header';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingForm />} />
      {/* <Route path="/services" element={<Services />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
