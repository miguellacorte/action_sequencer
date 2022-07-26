import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup({ userNotes, userDrawingX, userDrawingY }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  console.log(userNotes, userDrawingX, userDrawingY);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      password,
      username,
      location,
	  compositions: [
		{
		  notes: userNotes,
		  drawingX: userDrawingX,
		  drawingY: userDrawingY
		}
	  ]
    };
    axios
      .post("/api/auth/signup", requestBody)
      .then((response) => {
        navigate("/participationHistory");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="text" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={handlePassword} />

        <label htmlFor="username">username: </label>
        <input type="text" value={username} onChange={handleUsername} />

        <label htmlFor="location">location: </label>
        <input type="text" value={location} onChange={handleLocation} />

        <button type="submit">Sign Up & Save Composition</button>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}

      
    </>
  );
}
