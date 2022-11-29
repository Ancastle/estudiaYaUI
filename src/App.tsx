import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Technology from "./components/Explainations/Technology";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology/:techName" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
