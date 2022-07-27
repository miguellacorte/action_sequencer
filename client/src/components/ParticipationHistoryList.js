import React from "react";
import { Link } from 'react-router-dom'
import "../styles/ParticipationList.css";

export default function ParticipationHistoryList({ users }) {

  let usersWithCompositions = [];
  
  for (let i = 0; i < users.length; i++){
    if (users[i].compositions[0].notes.length !== 0) {
      usersWithCompositions.push(users[i])
    }
  }

  console.log(users)
  console.log(usersWithCompositions)

  return (
    <div>
      {usersWithCompositions.map((user) => {
        return (
          <div key={user._id} className="biglist">
            <Link to={`/participationHistory/${user._id}`}>
              <h2>{user.username}</h2>
            </Link>
              <h3>{user.location}</h3>
              <h4>{user.createdAt}</h4>
          </div>
        );
      })}
    </div>
  );
}
