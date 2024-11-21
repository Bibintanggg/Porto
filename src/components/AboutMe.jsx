import { useNavigate } from "react-router-dom";
import React from "react";
import InstagramIcon from '../assets/Instagram.svg';
import LinkedinIcon from '../assets/Linkedin.svg';
import TwitterIcon from '../assets/Twitter.svg';


function AboutMe() {
    const navigate = useNavigate()
    
    return (
        <section>
            <div>
                <h1 className="text-center font-jakarta text-4xl font-medium">About Me</h1>
                <div className="border border-black w-10 justify-center mx-auto mt-1 rounded-full opacity-70"></div>
                <div className="border border-black w-16 mt-1 justify-between mx-auto rounded-full opacity-70"></div>
            </div>

            <div className="flex justify-center mt-12 space-x-10">
                <div className="w-96 h-96 bg-black"></div>
                
                <div className="flex-col flex">
                <h1 className="text-2xl font-jakarta font-medium">Hii,Its Me Bintang !!</h1>
                <p className="text-lg mt-10 font-jakarta">a student at Vocational High School 46 Jakarta majoring in <br /> Software Engineering. 
                I’m  passionate about Front-End Development <br /> and UI/UX Design with experience in building interactive <br /> 
                interfaces using React and designing user experiences that are <br /> both simple and engaging.</p>
                
                <div className="flex w-36 mt-10 space-x-2 opacity-80">
                    <a href="">
                    <img src={InstagramIcon} alt="IconInstagram" 
                    className="grayscale hover:grayscale-0 transition-grayscale duration-300 ease-in-out"/>
                    </a>
                    <a href="">

                    <img src={LinkedinIcon} alt="IconLinkedin" 
                    className="grayscale hover:grayscale-0 transition-grayscale duration-300 ease-in-out"/>
                    </a>
                    <a href="">

                    <img src={TwitterIcon} alt="IconTwitter" 
                    className="grayscale hover:grayscale-0 transition-grayscale duration-300 ease-in-out"/>
                    </a>
                </div>

                <button className="bg-lime- rounded-full font-jakarta  text-lg whitespace-pre w-40 h-10 mt-10 mx-auto animate-bounce"
                onClick={() => navigate('/discover')}>
                    Discover More !
                </button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;