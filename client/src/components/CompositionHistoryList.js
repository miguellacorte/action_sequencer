import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function CompositionHistoryList() {
  const [users, setUsers] = useState([]);

  const getAllCompositions = () => {
    axios
      .get("http://localhost:5005/api/projects")
      .then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCompositions();
  }, []);

  return (
    <div >
      
        {users.map((user) => {
          return (
            <div key={user._id} >
              <Link to={`/compositionHistory/${user._id}`}>
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
