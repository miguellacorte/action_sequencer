import React from "react";
import { Link } from 'react-router-dom'

export default function ParticipationHistoryList({ users }) {
  console.log(users);
  return (
    <div>
      {users?.map((user) => {
        return (
          <div key={user._id}>
            <Link to={`/participationHistory/${user._id}`}>
              <h2>{user.username}</h2>
              <h3>{user.location}</h3>
              <h4>{user.createdAt}</h4>
              {/* SLICE CREATED TIME BABY!! */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
