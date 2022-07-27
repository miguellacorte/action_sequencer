import React from "react";
import { Link } from "react-router-dom";
import "../styles/ParticipationList.css";

export default function SmallParticipationList({ users }) {
//   let usersWithCompositions = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].compositions[0].notes.length !== 0) {
//       usersWithCompositions.push(users[i]);
//     }
//   }

  console.log(users)
//   let lastThreeUsers = usersWithCompositions?.slice(
//     usersWithCompositions.length - 3,
//     usersWithCompositions.length
//   );
//   console.log(lastThreeUsers);

  //   for (let i = 0; i < lastThreeUsers.length; i++){
  //    lastThreeUsers[i].createdAt.slice(0,5)
  //   }

  //   console.log(lastThreeUsers[1].createdAt.slice(0,10))

  return (
    <div>
      {users?.map((user) => {
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
