import React, {useState, useRef} from 'react'
import "../styles/Navbar.css"

export default function NavBar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="/participationHistory">Participation History</a></li>
          <li><a href="/playground">Playground</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>
  )
}







