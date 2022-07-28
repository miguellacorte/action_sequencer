import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth";
import FormInput from "../styles/FormInput.css"

export default function LoginSave({ userNotes, userDrawingX, userDrawingY }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  console.log(userNotes, userDrawingX, userDrawingY);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      password,
	  compositions: [
		{
		  notes: userNotes,
		  drawingX: userDrawingX,
		  drawingY: userDrawingY
		}
	  ]
    };
    axios
      .post("/api/auth/login", requestBody)
      .then((response) => {
        console.log("token set ser");
        const token = response.data.authToken;

        storeToken(token);
        verifyStoredToken().then(() => {
          navigate("/participationHistory");
        });
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email: </label>
        <input type="text" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={handlePassword}  />

        <button type="submit">Log In & Save composition</button>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}
    </>
  );
}
