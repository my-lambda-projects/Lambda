import React, { useState } from "react";

export default function TestingForms() {
  const [testingForm, setTestingForms] = useState({
    username: '',
    password: '',
    remember_pass: false,
    account_type: ''
  });

  function changeHandler(e) {
    // console.log(e.target.name);
    if (e.target.value.length < 18) {
      if (e.target.type === 'checkbox') {
        setTestingForms({
          ...testingForm,
          [e.target.name]: e.target.checked
        });
      } else {
        setTestingForms({
          ...testingForm,
          [e.target.name]: e.target.value
        });
      }
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    //To see the values on our event object we can persist it
    e.persist();
    console.log(e);

    console.log(testingForm);

    // Clearing the values in our form inputs
    const initialState = {
      username: '',
      password: '',
      remember_pass: false,
      account_type: ''
    }
    setTestingForms(initialState);
  }
  
  return (
    <div className="TestingForms">
      <form onSubmit={submitHandler}>
        <label htmlFor="testform_username">Username</label>
        <input
          type="text"
          id="testform_username"
          name="username"
          placeholder="Enter your username here"
          onChange={changeHandler}
          value={testingForm.username}
        />
        <label htmlFor="testform_password">Password</label>
        <input
          type="password"
          id="testform_password"
          name="password"
          placeholder="Enter your password here"
          onChange={changeHandler}
          value={testingForm.password}
        />
        <label htmlFor="testform_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="testform_remember_pass"
          name="remember_pass"
          onChange={changeHandler}
          checked={testingForm.remember_pass}
        />
        <label htmlFor="testform_account_type">Select An Account Type: </label>
        <select
          name="account_type"
          id="testform_account_type"
          onChange={changeHandler}
          value={testingForm.account_type}
        >
          <option value="">Select an option</option>
          <option value="gold">Gold Account</option>
          <option value="slvr">Silver Account</option>
          <option value="brnz">Bronze Account</option>
        </select>
        <button type="sybmit">Submit</button>
      </form>
    </div>
  );
}
