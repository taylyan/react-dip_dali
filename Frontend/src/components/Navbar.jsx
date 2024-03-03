import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo_gerb.png'
import '../css/Navbar.css'

const Navbar = ({ role }) => {
  return (
    <nav className='navbar'>
       <img src={Logo} />
      <div className='leftSide'>
        <div className='leftSide'>

          <div className='hiddenLinks'>
          <Link to="/books" className='navbar-link'>Books</Link>
        {role === "admin" && <>
          <Link to="/addbook" className="navbar-link">Add Book</Link>
          <Link to="/adduser" className="navbar-link">Add Student</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <Link to="/thingspeak" className="navbar-link">Thingspeak</Link>

        </>
        }
        {role === "user" && <>
          <Link to="/addbook" className="navbar-link">Add Book</Link>
          <Link to="/thingspeak" className="navbar-link">Thingspeak</Link>

        </>
        }
        {role === "" ?
          <Link to="/login" className='navbar-link'>Login</Link>
          : <Link to="/logout" className='navbar-link'>Logout</Link>
        }
        </div>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/books" className='navbar-link'>Books</Link>
        {role === "admin" && <>
          <Link to="/addbook" className="navbar-link">Add Book</Link>
          <Link to="/adduser" className="navbar-link">Add Student</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <Link to="/thingspeak" className="navbar-link">Thingspeak</Link>

        </>
        }
        {role === "user" && <>
          <Link to="/addbook" className="navbar-link">Add Book</Link>
          <Link to="/thingspeak" className="navbar-link">Thingspeak</Link>

        </>
        }
        {role === "" ?
          <Link to="/login" className='navbar-link'>Login</Link>
          : <Link to="/logout" className='navbar-link'>Logout</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar