import React from "react";

function Navbar() {
    return (
        <nav className="w-full fixed top-8 z-20 bg-opacity-50 text-lg text-white">
            <ul className="flex mx-auto gap-10 text-center text-lg justify-center py-4 font-poppins font-medium">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
