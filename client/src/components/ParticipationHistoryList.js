import React from "react";
import { Link } from "react-router-dom";
import "../styles/ParticipationList.css";

export default function ParticipationHistoryList({ usersWithCompositions }) {

  if (usersWithCompositions !== undefined) {
   

    return (
      <div>
        {usersWithCompositions?.map((user) => {
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
}
