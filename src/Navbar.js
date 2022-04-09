import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        
        <nav className="navigation">
            <ul>
                <li><a href="./"></a>Home</li>
                <li><a href="./"></a>About</li>
                <li><a href="./"></a>Skills</li>
                <li><a href="./"></a>Project</li>
                <li><a href="./"></a>Contact</li>
            </ul>  
            <div className="owner">
                <p>Created by:- Darshil Kantariya</p>
            </div>             
        </nav>
        
    );
}
 
export default Navbar;