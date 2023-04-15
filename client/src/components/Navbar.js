import React, {useState, useRef} from 'react'
import "../styles/Navbar.css"

export default function NavBar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>☰</span>
        
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/participationHistory">Participation History</a></li>
          <li><a href="/playground">Playground</a></li>
        </ul>
      </nav>
    </div>
  )
}







