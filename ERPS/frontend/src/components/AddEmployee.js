import React, { useState } from 'react';
import axios from 'axios';

import AdminNav from './AdminNav';
import AdminName from './AdminName';
import Header from './Header';

import '../assets/form.css';

import V13 from '../images/V13.jpg';

export default function AddEmployee() {
  const [name, setName] = useState('');
  const [employee_id, setEmployeeID] = useState('');
  const [job_type, setJobType] = useState('');
  const [User_name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [job_title, setJobTitle] = useState('');
  const [age, setAge] = useState('');
  const [Education, setEducation] = useState('');
  const [Certification, setCertification] = useState('');

  function sendData(e) {
    const newEmployee = {
      name,
      employee_id,
      job_type,
      User_name,
      password,
      job_title,
      age,
      Education,
      Certification,
    };
    console.log(newEmployee);
    axios
      .post('http://localhost:4000/employee/add', newEmployee)
      .then(() => {
        alert('Add Employee');
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
          style={{
            backgroundImage: `url(${V13})`,
            backgroundSize: 'container',
          }}
        >
          <br></br>
          <div className='form-style-5'>
            <form onSubmit={sendData}>
              <div>
                <center>
                  <h1 className='text-2xl'>Add Employee</h1>
                </center>
                <br></br>
                <br></br>
                <div></div>
                <label for='name'>Employee Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter Employee Name '
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
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
                <label for='job_type'>Job Type</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter type of the job'
                  onChange={(e) => {
                    setJobType(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='User_name'>User Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter the user name'
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='password'>Password</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter the password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='job_title'>Job Title </label>

                <select
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                  }}
                  className='form-control'
                >
                  <option value='acadmic'> Select One</option>
                  <option value='acadmic'> Acadamic</option>
                  <option value='non-acadamic'> Non-Acadmic</option>
                </select>
              </div>

              <div className='container'>
                <label for='age'>Age</label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Enter the Age'
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='Education'>Education</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  onChange={(e) => {
                    setEducation(e.target.value);
                  }}
                />
              </div>

              <div className='container'>
                <label for='Certification'>Certification</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  onChange={(e) => {
                    setCertification(e.target.value);
                  }}
                />
              </div>

              <center>
                <button
                  type='submit'
                  class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Submit
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
