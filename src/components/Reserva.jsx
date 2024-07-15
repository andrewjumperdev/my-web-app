import React, { useState } from 'react';
import PayPalButton from './PayPal';
import Calendar from './Calender';

const ScheduleConsultation = () => {
  const [paid, setPaid] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    summary: 'Consultoría',
    description: 'Sesión de consultoría',
    startDateTime: '',
    endDateTime: '',
  });

  const handlePaymentSuccess = (details) => {
    console.log('Payment Successful:', details);
    setPaid(true);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setEventDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h2 className='text-gradient my-5'>Agendar Consultoría</h2>
      <img src='./img/7566.jpg' className="img-fluid consulting-img" alt="..."></img>
      {!paid ? (
        <PayPalButton onSuccess={handlePaymentSuccess} />
      ) : (
        <div>
          <input
            type="datetime-local"
            name="startDateTime"
            value={eventDetails.startDateTime}
            onChange={handleDateChange}
          />
          <input
            type="datetime-local"
            name="endDateTime"
            value={eventDetails.endDateTime}
            onChange={handleDateChange}
          />
          <Calendar eventDetails={eventDetails} />
        </div>
      )}
    </div>
  );
};

export default ScheduleConsultation;
