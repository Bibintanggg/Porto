import React from "react";
import SertiDicoding from "/SertifikatDicoding.png";

function CardActivity() {
    return (
        <section> 
            <div className="grid place-items-center">
                <div className="relative w-[35rem] h-[25rem] bg-gray-300 bg-opacity-40 rounded-lg grid place-items-center group">
                    <img
                        src={SertiDicoding}
                        alt="Serti"
                        className="w-[32rem] rounded-md transition duration-300 ease-out group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end mb-16     opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 ease-out space-y-2">
                    <h1 className="font-jakarta font-[900] text-white ml-9">Dicoding - <span className="opacity-50">Activity</span></h1>
                    <p className="text-white text-sm font-semibold font-jakarta ml-9">
                    Gaining essential programming skills by focusing on basic concepts like variables, data types, operators, 
                    and control flow. Through this module, I learned to think critically in designing simple algorithms, which 
                    creates a foundation for building more complex programs in the future.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardActivity;
