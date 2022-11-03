import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';

const ReservationForm = () => {
  const [clientName, setClientName]  = useState("");
  const [people, setPeople] = useState(0);
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState("")
  const [time, setTime] = useState("");
  const authorization = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clientName, people, contactNumber, date, time);
    console.log( new Date(date + " " + time) );
    console.log(JSON.stringify({
      clientName: clientName, people: people, reservationDate: new Date(date + " " + time), contactNumber: contactNumber
    }))
    fetch(config.apiurl + "/reservation/create-reservation", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer ' +  authorization.auth.token
      },
      body: 
        JSON.stringify({
          clientName, people, reservationDate: new Date(date + " " + time), contactNumber
        })
      
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === "success") {
        alert("reservation created");
        navigate('/home/reservation');
      }
    })
    .catch(err => console.log("error", err));

  };
  return (
    <div className='parent'>
      <div className='form-box reservation-box-size'>
        <h1>Reservation Form</h1>
        <form onSubmit={handleSubmit}>
          <p>Customer Name</p>
          <input type='text' name='fname' id='name' placeholder='Enter Customer Name' required 
            value={clientName} 
            onChange={(e) => setClientName(e.target.value)}/>
          <p>Number of People</p>
          <input type='number' name='number' id='numberofcustomer' placeholder='Enter Number of People' required 
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <p>Contact Number</p>
          <input type='tel' name='phone' id='phone' placeholder='Enter Contact Number' required 
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
          />
          <p>Choose Reservation Date</p>
          <input type='date' name='date' id='date' required 
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <p>Reservation Time</p>
          <input type='time' name='time' id='time' required 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input type='submit' name='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
