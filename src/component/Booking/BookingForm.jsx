import "./BookingForm.css";
import { useState, useReducer } from "react";

const BookingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const reserved = ("" + option);
        setReservas(reserved);

    }

    const initDate = new Date();
    initDate.setDate(initDate.getDate() + 1);
    const YYYY = initDate.getFullYear();
    const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
    const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();


    const horarios = [

        {value: "17:00"},
        {value: "17:30"},
        {value: "18:00"},
        {value: "18:30"},
        {value: "19:00"},
        {value: "19:30"}
      ]

    const [reservas, setReservas] = useState("");

    let carga = []

    const getCarga = () => {

    let aux;

        for (let i = 0; i < horarios.length; i++) {
          aux = 0;
              if(horarios[i].value == reservas) {
                  aux = 1;}
          if(aux == 0) {
            const hora = horarios[i].value;
            carga.push({hora: hora});
          }
      }
      return carga;

      }
    getCarga();

    const [date, setDate] = useState(YYYY + "-" + MM + "-" + DD);
    const [option, setOption] = useState({carga});
    const [number, setNumber] = useState("1");
    const [ocassion, setOcassion] = useState("");

    return(
  <div className="form_div">
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="res-date" className="label">Choose date
    <input
            type="date" id="res-date" className="input" name="fecha"
            value={date}ha
            onChange={setDate}/>
   </label>

   <label htmlFor="res-time" className="label">Choose time
    <select id="res-time " className="input" name="hora"
            onChange={(e) => setOption(e.target.value)}>
            {carga.map(item => {
                  return (<option key={item.hora} value={item.hora}>{item.hora}</option>);
              })}
    </select>
   </label>
   <label htmlFor="guests" className="label">Number of guests
        <input  type="number" placeholder="1" min="1" max="10" id="guests"  className="input"
            onChange={setNumber}/>
   </label>
   <label htmlFor="occasion" className="label">Occasion
    <select id="occasion"  className="input"
            onChange={setOcassion}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
   </label>
    <input type="submit" value="Make Your reservation"  className="button"/>
    </form>
</div>
    )
}
export default BookingForm;

// const reservas  = ("");
// const [state, dispatch] = useReducer(reducer, reservas);

// const reducer = (state, action) => {
//   if(action.type === "reservando") return("" + option);
//  return state;
// }