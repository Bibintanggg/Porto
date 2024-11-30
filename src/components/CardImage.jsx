import React from "react";
import Medal from '../assets/3rdMedal.svg';

function CardImage() {
    return (
        <section className="h-screen flex items-center justify-center mb-[-5%]">
            <div className="flex w-[60%] items-start justify-between">
                {/* Kolom Kiri */}
                <div className="flex flex-col font-jakarta font-medium w-[45%]">
                    <h2 className="text-center font-poppins text-4xl font-bold mb-8">Education</h2>
                    <h1 className="text-xl mb font-jakarta font-bold">SMKN 46 - Jakarta</h1>
                    <p className="text-base mb-4">Software Engineer</p>
                    <div className="w-96 h-60 bg-black"></div>
                </div>

                {/* Kolom Kanan */}
                <div className="flex font-jakarta w-[45%]">
                    {/* Membuat "Achievement" sejajar dengan shape hitam */}
                    <div className="flex flex-col items-start ml-8 mt-[6.5rem]">
                        <h2 className="text-lg  mr-4 font-jakarta font-bold">Achievement & Activity</h2>
                        <div className="flex items-center gap-x-4">
                            <img src={Medal} alt="Medal Icon" className="w-9" />
                            <p className="text-base font-jakarta mt-5">
                                3Rd Winner Website Competition In Trigora Cup
                            </p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <img src={Medal} alt="Medal Icon" className="w-9" />
                            <p className="text-base font-jakarta mt-5">
                                3Rd Winner Website Competition In Trigora Cup
                            </p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <img src={Medal} alt="Medal Icon" className="w-9" />
                            <p className="text-base font-jakarta mt-5">
                                3Rd Winner Website Competition In Trigora Cup
                            </p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <img src={Medal} alt="Medal Icon" className="w-9" />
                            <p className="text-base font-jakarta mt-5">
                                3Rd Winner Website Competition In Trigora Cup
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default CardImage;
