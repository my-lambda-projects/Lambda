import React, { useState } from "react";
import DisplayComponent from './DisplayComponent';

const formData = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

const errorData = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

const ContactForm = () => {
  const [displayData, setDisplayData] = useState(false);
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState(errorData);

  const errorHandling = (fieldName, fieldValue) => {
    if (fieldName === "firstName" && fieldValue.length < 5)
      return `${fieldName} must have at least 5 characters.`;

    const emailRegex = /(.*)@(.*)\.(.+)/g;
    if (fieldName === "email" && !fieldValue.match(emailRegex))
      return `${fieldName} must be a valid email address.`;

    if (fieldName !== "message" && fieldValue === "")
      return `${fieldName} is a required field.`;
    
    return "";
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const submitErrors = {};
    Object.keys(errors).forEach(field => {
      submitErrors[field] = errorHandling(field, form[field])
    });
    
    setErrors(submitErrors);
    
    const hasErrors = (submitErrors.firstName === "" && submitErrors.lastName === "" && submitErrors.email === "" && submitErrors.message === "");
    setDisplayData(hasErrors);
      
  };

  const handleChange = (e) => {
    const errorMessage = errorHandling(e.target.name, e.target.value);

    if (errorMessage !== "") {
      setDisplayData(false);
    }

    setErrors({
      ...errors,
      [e.target.name]: errorMessage
    });

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            onChange={handleChange}
            name="firstName"
            value={form.firstName}
            id="firstName"
            placeholder="Edd"
          />
          {(errors.firstName) && <p data-testid="error">Error: {errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            onChange={handleChange}
            id="lastName"
            name="lastName"
            value={form.lastName}
            placeholder="Burke"
          />
          {(errors.lastName) && <p data-testid="error">Error: {errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input 
            onChange={handleChange}
            id="email"
            name="email" 
            value={form.email}
            placeholder="bluebill1049@hotmail.com"
          />
          {(errors.email) && <p data-testid="error">Error: {errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            value={form.message}
          />
          {(errors.message) && <p data-testid="error">Error: {errors.message}</p>}
        </div>

        {displayData && <DisplayComponent form={form}/>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;