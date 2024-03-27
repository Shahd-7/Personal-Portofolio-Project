import { useState } from "react";

function Navbar() {
  const [navActive] = useState(false);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./vite.svg" alt="Logo" />
      </div>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li> Home</li>
          <li>Bio</li>
          <li> Skills </li>
          <li> Projects </li>
          <li>Contact Me</li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
