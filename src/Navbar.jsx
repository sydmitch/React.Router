import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/purple">Purple</Link>
      <Link to="/pink">Pink</Link>
    </nav>
  );
}

export default Navbar;