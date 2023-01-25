import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import BookingPage from './component/Booking/BookingPage';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Header/>, <Main/>]}/>
            <Route path="/abooking" element={[ <Header/>, <BookingPage />, <Footer/>]} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
