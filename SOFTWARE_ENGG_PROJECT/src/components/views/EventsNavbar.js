import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles.css'

const EventsNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className='logo'>
            <h2>VENUE GENIE</h2>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Events">Home</NavLink>
            </li>
            <li>
              <NavLink to="/UploadProduct">Upload Events</NavLink>
            </li>
            <li>
              <NavLink to="/">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/Landing">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <img src="landing_page.jpg" width="1450" height="700"></img> */}
    </nav>

  )
}

export default EventsNavbar