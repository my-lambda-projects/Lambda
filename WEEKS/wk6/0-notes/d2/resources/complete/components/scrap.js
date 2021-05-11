// This is the top-level component
// so we'll keep application state at this level.

import React, { useState } from "react";
import FriendsList from "./FriendsList";
import Search from "./Search";
import friendsData from "../dummy-data/friends";

export default function App () {
  const [ friendsState, setFriendsState ] = useState( friendsData );

  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = ( id ) => {
    const shallowCopy = friendsState.map( ( friend ) => {
      const newFriend = { ...friend };
      if ( newFriend.id === id ) {
        newFriend.married = !newFriend.married;
      }
      return newFriend;
    } );
    setFriendsState( shallowCopy );
  };

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className="app-friends container">
      {/* STRETCH - Changes to the input should update the search term */ }
      <Search />

      {/* What prop/props does FriendsList need? */ }
      <FriendsList
        friendsArray={ friendsState }
        changeStatusProp={ changeStatus }
      />
    </div>
  );
}
