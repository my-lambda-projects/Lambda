import React from "react";

import Friend from "./Friend";

export default function FriendsList(props) {
  const { friendsArray, changeStatusProp } = props;

  return (
    <div className="list-friends container">
      {friendsArray.map((friend,index) => {
        return (
          <Friend
            friendData={friend}
            key={friend.id}
            changeStatus={changeStatusProp}
          />
        );
      })}
    </div>
  );
}
