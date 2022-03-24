import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo} alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
