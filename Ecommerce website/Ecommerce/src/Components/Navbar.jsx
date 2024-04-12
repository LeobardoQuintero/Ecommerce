import React from 'react'
import "./Navbar.css";
import {Link, useNavigate } from "react-router-dom"


const Navbar = ({token, setToken}) => {
    const navigate = useNavigate
    const handleLogout = () => {
        setToken(null)
        navigate("/login")
    }
  return (
    <nav className="navbar-container">
        <div>
            <strong><em>Leo's Goodwill</em></strong>
        </div>
        <div className='link'>
            <Link className='nav-link' to={"/"}>
                Prodcuts
            </Link>
            <Link to={"/Register"}> Register </Link>
            {token ? (
                <>
                <Link className='nav-link' to={"/cart"}>cart</Link>
            <button className='logout-button' onClick={handleLogout}>Logout</button> 
            </> ): (
            <Link to="/login" className='nav-link'>
                login
            </Link>  
        )}
        </div>
    </nav>
  )
}

export default Navbar