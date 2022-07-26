import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Home from "./pages/Home"
import ParticipationHistory from "./pages/ParticipationHistory";
import ParticipationRecall from "./pages/ParticipationRecall";
import Playground from "./pages/Playground"
import axios from "axios";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

 
function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);



  console.log(users)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/participationHistory" element={<ParticipationHistory users={users} />} />
        <Route path="/participationHistory/:id" element={< ParticipationRecall users={users} />} />
        <Route path="/playground" element={< Playground />} />
        <Route path="/signup" element={< SignupPage />} />
        <Route path="/login" element={< LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;