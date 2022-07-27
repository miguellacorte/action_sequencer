import React from "react";
import { Link } from "react-router-dom";
import "../styles/smallParticipationList.css";

export default function SmallParticipationList({ users }) {

  let lastThreeUsers = users?.slice(users.length - 3, users.length);
  console.log(lastThreeUsers)

//   for (let i = 0; i < lastThreeUsers.length; i++){
//    lastThreeUsers[i].createdAt.slice(0,5)
//   }

//   console.log(lastThreeUsers[1].createdAt.slice(0,10))

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
