import React, { useState } from "react";

const AnimalForm = ({ errors, touched, values }) => {
  const [animals, setAnimals] = useState([
    {
      species: "Lion",
      age: "12",
      notes: "",
      id: 365
    }
  ]);
  const [animal, setAnimal] = useState({ species: "", age: "", notes: "" });

  // Handle changes from form inputs
  const handleChange = event => {
    setAnimal({ ...animal, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newAnimal = {
      ...animal,
      id: Date.now()
    };
    setAnimals([...animals, newAnimal]);
  };

  return (
    <div className="animal-form">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="species">Species:</label>
        <input
          id="species"
          type="text"
          name="species"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="text"
          name="age"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          type="text"
          name="notes"
          onChange={event => handleChange(event)}
        />

        <table>
        </table>

        <button role="button">Submit!</button>
      </form>

      <h4>Current Animals</h4>
      {animals.map(animal => (
        <p key={animal.id}>{animal.species}</p>
      ))}
    </div>
  );
};

export default AnimalForm;
