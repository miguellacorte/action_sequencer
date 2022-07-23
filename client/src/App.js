import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Home from "./pages/Home"
import CompositionHistory from "./pages/CompositionHistory";
import CompositionRecall from "./pages/CompositionRecall";

 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compositionHistory" element={< CompositionHistory />} />
        <Route path="/compositionHistory/:id" element={< CompositionRecall />} />
      </Routes>
    </div>
  );
}

export default App;
