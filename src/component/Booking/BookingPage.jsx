import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, setAvailableTimes, submitForm}) => (
  <div>
    <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>
  </div>
)

export default BookingPage;