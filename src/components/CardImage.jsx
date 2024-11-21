import React from "react";
import Medal from '../assets/3rdMedal.svg'

function CardImage() {
    return (
        <section>
            <div className="justify-center h-screen items-center flex">
                <div className="flex-col font-jakarta font-medium">
                    <h2 className="text-center font-poppins text-4xl font-bold mb-16">Education</h2>

                    <div className="flex-col">
                    <h1 className="text-left ">2024 - Present</h1>
                    <p>SMKN 46 - Jakarta</p>
                    </div>
                    
                    <div className="w-96 h-60 bg-black mt-2"></div>    
                </div>
            <div className="flex gap-x-2">
                <img src={Medal} alt="MedalIcon" 
                className="w-9 ml-4"/>
                <p className="mt-[1%]">3Rd Winner Website Competition <br /> In Trigora Cup</p>
            </div>
            </div> 
            
        </section>
    )
}

export default CardImage;