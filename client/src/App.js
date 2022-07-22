import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Home from "./pages/Home"
import CompositionHistory from "./pages/CompositionHistory";
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compositionHistory" element={< CompositionHistory />} />
      </Routes>
    </div>
  );
}

export default App;
