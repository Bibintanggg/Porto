import { useState } from 'react';
import ProjectDetail from './ProjectDetail'
import WebsiteImage from '/WebDev.jpg'

function Project() {
    return (
        <section className='mt-32'> 
        <p className='text-center mr-20'>Explore My Work</p>
            <h1 className="text-center font-poppins text-5xl font-bold">Projects</h1>
                <div className="border border-black w-10 justify-center mx-auto mt-3 rounded-full opacity-70"></div>
                <div className="border border-black w-16 mt-1 justify-between mx-auto rounded-full opacity-70"></div>
                <p className='text-center mt-5'>These projects represent my journey as a developer and UI/UX designer.</p>

                <div className="flex flex-wrap justify-center mt-10 space-x-5 brightness-50 cursor-pointer">
                    <a href="">
                        <div
                        className="relative w-96 h-56 rounded-lg overflow-hidden group"
                        style={{
                        backgroundImage: `url(${WebsiteImage})`,
                        backgroundSize: 'cover',
                        }}
                        >
                            <div
                            className="w-full h-full bg-black bg-opacity-40 transition 
                            duration-300 group-hover:scale-90 group-hover:grayscale"
                            style={{
                            backgroundImage: `url(${WebsiteImage})`,
                            backgroundSize: 'cover',
                            }}
                            ></div>

                            <div
                            className="absolute bottom-[-60px] left-0 w-full text-white text-center 
                            py-10 transition-all duration-300 group-hover:bottom-0 font-poppins 
                            text-xl font-semibold"
                            >
                            Web Development
                            </div>
                        </div>
                        </a>


                    <div
                        className="relative w-96 h-56 rounded-lg overflow-hidden group"
                        style={{
                        backgroundImage: `url(${WebsiteImage})`,
                        backgroundSize: 'cover',
                        }}
                        >
                            <div
                            className="w-full h-full bg-black bg-opacity-40 transition 
                            duration-300 group-hover:scale-90 group-hover:grayscale"
                            style={{
                            backgroundImage: `url(${WebsiteImage})`,
                            backgroundSize: 'cover',
                            }}
                            ></div>

                            <div
                            className="absolute bottom-[-60px] left-0 w-full text-white text-center 
                            py-10 transition-all duration-300 group-hover:bottom-0 font-poppins 
                            text-xl font-semibold"
                            >
                            UI UX Design
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default Project;