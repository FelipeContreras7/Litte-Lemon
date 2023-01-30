import './App.css';
import { useReducer } from 'react';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import BookingPage from './component/Booking/BookingPage';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {fetchAPI, submitAPI} from './api/api';
import ConfirmedBooking from './component/Booking/ConfirmedBooking';


function App() {

  const initialTimes = () => {
      const hours = {
      times: [...fetchAPI(new Date())],
    };
    return hours;
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitForm(formInfo) {
    const ok = submitAPI(formInfo);
    if (ok) {
      window.location.href = '/confirmedbooking';
    }
  }

  const initialState = initialTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Header/>, <Main/>]}/>
            <Route path="/abooking" element={[ <Header/>, <BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>, <Footer/>]} />
            <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
