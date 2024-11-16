import { useState } from 'react';
import WebDev from '/WebDev.jpg';

function Project() {
    return (
        <section > 
            <h1 className="text-3xl font-jakarta font-bold text-center mt-20">Projects</h1>
            <p className="text-center font-jakarta text-opacity-50 ">Clicks For More Info</p>

            <div className="flex space-x-10 mx-auto justify-center">

            <div className="grid place-items-center mt-5">
                <div className="relative bg-opacity-40 rounded-lg grid place-items-center group cursor-pointer">
                    <img
                        src={WebDev}
                        alt="Serti"
                        className="w-[18rem] h-[22rem] object-cover rounded-md transition duration-300 ease-out group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                    <h1 className="font-jakarta font-[900] text-white ml-9">Web Development</h1>
                    
                    </div>
                </div>
            </div>

            <div className="grid place-items-center mt-5">
                <div className="relative rounded-lg grid place-items-center group cursor-pointer">
                    <img
                        src={WebDev}
                        alt="Serti"
                        className="w-[18rem] h-[22rem] object-cover rounded-md transition duration-300 ease-out group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                    <h1 className="font-jakarta font-[900] text-white ml-9">Web Development</h1>
                    
                    </div>
                </div>
            </div>

            <div className="grid place-items-center mt-5">
                <div className="relative rounded-lg grid place-items-center group cursor-pointer">
                    <img
                        src={WebDev}
                        alt="Serti"
                        className="w-[18rem] h-[22rem] object-cover rounded-md transition duration-300 ease-out group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                    <h1 className="font-jakarta font-[900] text-white ml-9">Web Development</h1>
                    
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Project;