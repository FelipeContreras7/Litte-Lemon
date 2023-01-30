import "./BookingForm.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => (

<>
  <Header />
  <div className="success_container">
    <h1 className="success">BOOKING CONFIRMED !!</h1>
    <button className="button"><Link to ="/" className="buttonlink">Back to Home</Link></button>
  </div>
  <Footer />
</>
);

export default ConfirmedBooking;

{/* <Link to ="/" className="button"></Link> */}