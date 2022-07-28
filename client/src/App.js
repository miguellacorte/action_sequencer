import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Home from "./pages/Home";
import ParticipationHistory from "./pages/ParticipationHistory";
import ParticipationRecall from "./pages/ParticipationRecall";
import Playground from "./pages/Playground";
import axios from "axios";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  let usersWithCompositions = [];
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

 
  for (let i = 0; i < users.length; i++) {
    if (users[i].compositions.length !== 0) {
      usersWithCompositions.push(users[i]);
    }
  }
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home usersWithCompositions={usersWithCompositions} />} />
        <Route
          path="/participationHistory"
          element={<ParticipationHistory usersWithCompositions={usersWithCompositions} />}
        />
        <Route
          path="/participationHistory/:id"
          element={<ParticipationRecall users={users} />}
        />
        <Route path="/playground" element={<Playground />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
