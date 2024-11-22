import React from "react";
import Medal from '../assets/3rdMedal.svg';

function CardImage() {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="flex w-[80%] items-start justify-between">
                {/* Kolom Kiri */}
                <div className="flex flex-col font-jakarta font-medium w-[45%]">
                    <h2 className="text-center font-poppins text-4xl font-bold mb-8">Education</h2>
                    <h1 className="text-xl mb-2">SMKN 46 - Jakarta</h1>
                    <p className="text-base mb-4">Software E</p>
                    <div className="w-96 h-60 bg-black"></div>
                </div>

                {/* Kolom Kanan */}
                <div className="flex flex-col font-jakarta w-[45%]">
                    {/* Membuat "Achievement" sejajar dengan shape hitam */}
                    <div className="flex items-start ml-8 mt-[6.5rem]">
                        <h2 className="text-lg font-medium mr-4">Achievement</h2>
                        <div className="flex items-center gap-x-4">
                            <img src={Medal} alt="Medal Icon" className="w-9" />
                            <p className="text-base">
                                3Rd Winner Website Competition <br /> In Trigora Cup
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardImage;
