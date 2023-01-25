import "./BookingForm.css";
import { useState, useReducer } from "react";

const handleSubmit = (e) => {
    e.preventDefault();
}

const BookingForm = () => {

    const initDate = new Date();
    initDate.setDate(initDate.getDate() + 1);
    const YYYY = initDate.getFullYear();
    const MM = initDate.getMonth() < 10 ? "0" + (initDate.getMonth() + 1) : initDate.getMonth() + 1;
    const DD = initDate.getDate() < 10 ? "0" + initDate.getDate() : initDate.getDate();



    const initialState = [
        {value: "17:00"},
        {value: "17:30"},
        {value: "18:00"},
        {value: "18:30"},
        {value: "19:00"},
        {value: "19:30"}]

    // const [reserva, setReserva] = useState({fecha:"", hora:"18:00"});

    const [carga, setCarga] = useState({hora:""});

    function cargarSelect() {

        let aux = 0;

        const arrayVacio = [];

        const initialState = [
            {value: "17:00"},
            {value: "17:30"},
            {value: "18:00"},
            {value: "18:30"},
            {value: "19:00"},
            {value: "19:30"}
        ]

        const reserva = [
            {hora: "18:00"},
            {hora: "21:00"},
            {hora: "17:00"}
        ]

    for (let i=0; i < initialState.length; i++) {

        aux = 0;

        for (let e = 0; e < reserva.length; e++) {

            if(initialState[i].value == reserva[e].hora) {
                aux = 1;
            }
        }
        if(aux == 0) {
            arrayVacio.push(initialState[i].value);
        }
    }
    console.log(arrayVacio);
    }


    const [date, setDate] = useState(YYYY + "-" + MM + "-" + DD);
    const [option, setOption] = useState({initialState});
    const [number, setNumber] = useState("1");
    const [ocassion, setOcassion] = useState("");

    return(
  <div className="form_div">
    <form className="form" onSubmit={handleSubmit}>
    <button onClick={cargarSelect}>ola</button>
    <label htmlFor="res-date" className="label">Choose date
    <input
            type="date" id="res-date" className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}/>
   </label>

   <label htmlFor="res-time" className="label">Choose time
    <select id="res-time " className="input"
            value={option}
            onChange={(e) => setOption(e.target.value)}>

            {initialState.map(item => {
                  return (<option key={item.value} value={item.value}>{item.value}</option>);
              })}
    </select>
   </label>
   <label htmlFor="guests" className="label">Number of guests
        <input  type="number" placeholder="1" min="1" max="10" id="guests"  className="input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}/>
   </label>
   <label htmlFor="occasion" className="label">Occasion
    <select id="occasion"  className="input"
            value={ocassion}
            onChange={(e) => setOcassion(e.target.value)}>
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