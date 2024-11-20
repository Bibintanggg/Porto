import React from "react";

function Navbar() {
    return (
        <nav>
            <div>
                <ul className="flex justify-center text-center space-x-10 mt-10 text-xl font-jakarta 
                font-medium">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;