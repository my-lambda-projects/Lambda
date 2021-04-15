import React, { useState } from 'react';

export default function StudentForm() {
  const [studentForm, setStudentForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    remember_pass: false,
  });

  function onFormChange(e) {
    // console.log(e.target.name);
    if (e.target.value === e.target.value.toLowerCase()) {
      setStudentForm({
        ...studentForm,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value
      });
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(studentForm);
    const initialState = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      remember_pass: false
    }
    setStudentForm(initialState);
  }

  return (
    <div className="StudentForm">
      <h1>Lambda Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="student_first_name">First Name</label>
        <input
          type="text"
          id="student_first_name"
          name="first_name"
          placeholder="Enter your first name here"
          onChange={onFormChange}
          value={studentForm.firstName}
        />
        <label htmlFor="student_last_name">Last Name</label>
        <input
          type="text"
          id="student_last_name"
          name="last_name"
          placeholder="Enter your last name here"
          onChange={onFormChange}
          value={studentForm.last_name}
        />
        <label htmlFor="student_username">Username</label>
        <input
          type="text"
          id="student_username"
          name="username"
          placeholder="Enter your username here"
          onChange={onFormChange}
          value={studentForm.username}
        />
        <label htmlFor="student_password">Password</label>
        <input
          type="password"
          id="student_password"
          name="password"
          placeholder="Enter your password here"
          onChange={onFormChange}
          value={studentForm.password}
        />
        <label htmlFor="student_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="student_remember_pass"
          name="remember_pass"
          onChange={onFormChange}
          checked={studentForm.remember_pass}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
