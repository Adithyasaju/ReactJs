import React from "react"
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
       <Link to ="/index" className="navbar-brand">Logo</Link>
       <div className="ml-auto">
        <ul className="navbar">
            <li className="navbar-nav">
                <Link to ="/index" className="navbar-brand">Home</Link>
                <Link to ="/About" className="navbar-brand">About</Link>
                <Link to ="/Services" className="navbar-brand">Services</Link>
                <Link to ="/Contact" className="navbar-brand">Contact</Link>
            </li>
        </ul>
       </div>

    </nav>
}
export default Navbar