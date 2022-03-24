import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

const Navbar = (props) => {
    const history = useHistory();
    localStorage.getItem("Token")
    const logoutButton = () => {
        toast.success("User Logout Successfully!", {
            position: "top-center",
        });
        localStorage.clear();
        props.onSetView(0)
        history.push('/signin')
    }

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
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={logoutButton} to="/">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}


export default Navbar
