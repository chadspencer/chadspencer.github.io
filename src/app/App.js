import { Routes, Route } from "react-router-dom";

import Home from '../home';
import OverflowCue from "../overflow-cue";
import ScrolledToEdge from "../scrolled-to-edge";

const App = () => {
  return (
    <Routes>
      <Route path="/overflowcue" element={<OverflowCue />} />
      <Route path="/scrolledtoedge" element={<ScrolledToEdge />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;