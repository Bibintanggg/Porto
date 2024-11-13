import React, { useState, useEffect } from "react";

function Navbar() {
    const [isSidebar, setIsSidebar] = useState(false);

    // Fungsi untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) { // Set nilai threshold untuk mengubah navbar
                setIsSidebar(true);
            } else {
                setIsSidebar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-20 transition-all duration-500 ease-in-out ${
                isSidebar ? "w-36 h-full bg-white text-black" : "w-full bg-white text-black"
            }`}
        >
            <ul
                className={`flex ${isSidebar ? "flex-col items-center" : "flex-row justify-center"} 
                    gap-10 text-center text-lg py-4 font-poppins mt-10 font-medium`}
            >
                <li><a href="#home" 
                onClick={() => setIsSidebar(false)}>Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
