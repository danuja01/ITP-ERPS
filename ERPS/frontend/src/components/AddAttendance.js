import React, { useState } from 'react';
import axios from 'axios';

import V5 from '../images/V5.jpg';
import AdminName from './AdminName';
import AdminNav from './AdminNav';
import Header from './Header';

export default function MarkAttendance() {
  const [employee_id, setEmployeeID] = useState('');
  const [date, setDate] = useState('');

  function sendData(e) {
    const newAttendance = {
      employee_id,
      date,
    };
    console.log(newAttendance);
    axios
      .post('http://localhost:4000/attendance/addM', newAttendance)
      .then(() => {
        alert('Marked Attendance');
        e.preventDefault();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <Header />
        <div
          style={{ backgroundImage: `url(${V5})`, backgroundSize: 'container' }}
        >
          <br></br>
          <div className='form-style-5'>
            <form onSubmit={sendData}>
              <div>
                <center>
                  <h1 className='text-2xl'>ATTENDANCE</h1>
                </center>
                <br></br>
                <br></br>
                <div></div>
              </div>

              <div className='container'>
                <label for='employee_id'>Employee ID</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter Employee ID '
                  onChange={(e) => {
                    setEmployeeID(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='date'>Select Date</label>
                <input
                  type='Date'
                  className='form-control'
                  id='exampleInputPassword1'
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>

              <center>
                <button
                  type='submit'
                  class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Mark As Present
                </button>
              </center>
            </form>
            <br></br>
          </div>
          <br></br>
        </div>
      </div>
    </section>
  );
}
