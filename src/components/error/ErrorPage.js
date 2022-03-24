import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'

const ErrorPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <h1>We are sorry, page not found</h1>
                <p className="mb-5">
                    The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                </p>
                <NavLink to="/"><button className="bott">Back To Homepage</button></NavLink>
            </div>
        </div>
    )
}

export default ErrorPage