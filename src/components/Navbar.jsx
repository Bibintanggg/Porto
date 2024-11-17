import React from "react";
import HomeIcon from "/src/assets/Home.svg";
import MeIcon from "/src/assets/Me.svg";
import ProjectIcon from "/src/assets/Project.svg";
import ContactIcon from "/src/assets/Contact.svg";

function Navbar() {
    return (
        <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 w-20 h-96 bg-gray-600 bg-opacity-40 z-[9999] text-black shadow-md rounded-tr-full rounded-br-full">
            <ul className="flex flex-col items-center justify-center h-full gap-6 font-poppins font-medium">
                <li>
                    <a
                        href="#home"
                        className="flex flex-col items-center text-black opacity-80"
                    >
                        <img
                            src={HomeIcon}
                            alt="Home"
                            className="w-8 h-8 mb-1 hover:opacity-50 transition-opacity duration-150 ease-in-out"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="flex flex-col items-center text-black opacity-80 hover:opacity-50 transition-opacity duration-150 ease-in-out"
                    >
                        <img src={MeIcon} alt="About" className="w-8 h-8 mb-1" />
                    </a>
                </li>
                <li>
                    <a
                        href="#project"
                        className="flex flex-col items-center text-black opacity-80 hover:opacity-50 transition-opacity duration-150 ease-in-out"
                    >
                        <img
                            src={ProjectIcon}
                            alt="Projects"
                            className="w-8 h-8 mb-1"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="flex flex-col items-center text-black opacity-80 hover:opacity-50 transition-opacity duration-150 ease-in-out"
                    >
                        <img
                            src={ContactIcon}
                            alt="Contact"
                            className="w-8 h-8 mb-1"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
