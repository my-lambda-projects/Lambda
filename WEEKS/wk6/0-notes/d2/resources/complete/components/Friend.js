import React from "react";
import PetsList from "./PetsList";

export default function Friend(props) {
  const { friendData, changeStatus } = props;

  const stateHandler = () => {
    props.changeStatus(friendData.id);
  };

  return (
    <div className="friend-friends container">
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className="friend-info">
        <div>
          <h3>Name: {friendData.name}</h3>
          <p>Age: {friendData.age}</p>

          <p>
            Married: {friendData.married ? "Yes" : "No"}{" "}
            <button onClick={stateHandler}>change</button>
          </p>
          <div>
            Likes:
            <ul>
              {friendData.hobbies.map((hobby) => {
                return <li key={hobby}>{hobby}</li>;
              })}
            </ul>
          </div>
        </div>

        <div>
          <PetsList pets={friendData.pets} />
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
        </div>
      </div>
    </div>
  );
}
