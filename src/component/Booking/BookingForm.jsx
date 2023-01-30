import "./BookingForm.css";
import { useState } from "react";

const BookingForm = ({availableTimes, setAvailableTimes, submitForm}) => {
  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 1);
  const YYYY = initDate.getFullYear();
  const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
  const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();

  const [date, setDate] = useState(YYYY + "-" + MM + "-" + DD);
  const [option, setOption] = useState("18:00");
  const [number, setNumber] = useState("1");
  const [ocassion, setOcassion] = useState("");

  const changingDate = (e) => {
    setDate(e.target.value);
  }

  const changingOption = (e) => {
    setOption(e.target.value);
  }

  let datee;

  const newPickedHour = (day, hour) => {

      const yyyymmdd = day.split("-");
      const dateYear = yyyymmdd[0];
      const dateMonth1st = yyyymmdd[1];
      const dateMonth2nd = parseInt(dateMonth1st);
      const dateMonthOk = dateMonth2nd - 1;
      const dateDay = yyyymmdd[2];

      const selected = hour.split(":");
      const dateHour = selected[0];
      const dateMinutes = selected[1];

    datee = new Date();
    datee.setFullYear(dateYear);
    datee.setDate(dateDay);
    datee.setMonth(dateMonthOk);
    datee.setHours(dateHour);
    datee.setMinutes(dateMinutes);
    return datee;
  }

  let validDate;
  const handleDateChange = (datee) => {

    if (datee <= new Date()) {
        alert(`Sorry! Reservations not available for this date!`);
        return;}
        else (validDate = "valid");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPickedHour(date, option);
    const usable = datee;
    handleDateChange(usable);
    if (validDate == "valid") {
    setAvailableTimes({setBookingDate: usable});
    const formInfo = {
      date: date,
      time: option,
      guests: number,
      ocassion: ocassion
    };
    submitForm(formInfo);}
  }


return(
  <div className="form_div">
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="res-date" className="label" >Choose date
    <input
            type="date" id="res-date" className="input" name="fecha" required
            value={date}
            onChange={changingDate}/>
   </label>

   <label htmlFor="res-time" className="label">Choose time
    <select id="res-time " className="input" name="hora" required
            onChange={changingOption}>
            { availableTimes.times.map((time, index) => {
                        return <option value={time} key={index}>{ time }</option>
                    })}
    </select>
   </label>
   <label htmlFor="guests" className="label">Number of guests
        <input  type="number" placeholder="1" min="1" max="10" id="guests"  className="input" required
            onChange={(e) => setNumber(e.target.value)}/>
   </label>
   <label htmlFor="occasion" className="label">Occasion
    <select id="occasion"  className="input" required
            onChange={(e) => setOcassion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
   </label>
    <input type="submit" value="Make Your reservation"  className="button" />
    </form>
</div>
    )
}
export default BookingForm;
