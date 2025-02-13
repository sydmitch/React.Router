import { Routes, Route } from "react-router-dom"
import Red from "./Red"
import Blue from "./Blue"
import Home from "./Home"
import Yellow from "./Yellow"
import Purple from "./Purple"
import Pink from "./Pink"

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/pink" element={<Pink />} />
      </Routes>
    </div>
  )
}

export default MainContainer