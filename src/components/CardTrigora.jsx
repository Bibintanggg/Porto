import React from "react";
import Trigora from '/Trigora.png';


function CardTrigora() {
    return (
        <section> 
            <div className="grid place-items-center">
                <div className="relative w-[35rem] h-[25rem] bg-gray-300 bg-opacity-40 rounded-lg grid place-items-center group">
                    <img
                        src={Trigora}
                        alt="Serti"
                        className="w-[32rem] rounded-md transition duration-300 ease-out group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end mb-16     opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 ease-out space-y-2">
                    <h1 className="font-jakarta font-[900] text-white ml-9">Trigora Cup 2024 - <span className="opacity-50">Achievement</span></h1>
                    <p className="text-white text-sm font-semibold font-jakarta ml-9">
                    Placed 3rd in the Trigora Cup 2024 Web Development Competition, strengthening my programming foundation in core concepts and <br />algorithm design.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default CardTrigora;