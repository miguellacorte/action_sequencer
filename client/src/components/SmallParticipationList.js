import React from "react";
import { Link } from "react-router-dom";
import "../styles/ParticipationList.css";

export default function SmallParticipationList({ usersWithCompositions }) {

  if (usersWithCompositions !== undefined) {
   
    let lastThreeUsers = usersWithCompositions?.slice(
      usersWithCompositions.length - 2,
      usersWithCompositions.length
    );
    console.log(lastThreeUsers);

    return (
      <div>
        {lastThreeUsers?.map((user) => {
          return (
            <div key={user._id} className="list">
              <Link to={`/participationHistory/${user._id}`}>
                <h3>{user.username}</h3>
              </Link>
              <p>{user.location}</p>
              <p>{user.createdAt}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
