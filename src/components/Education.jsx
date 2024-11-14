import React from "react";
import Kindergarten from '../assets/Kindergarten.svg'
import SchoolIcon from '../assets/School.svg'
import HighSchoolIcon from '../assets/HighSchool.svg'

function Education() {
    return (
        <section className="mt-32">
            <div>
                <div>
                    <h1 className="text-center font-jakarta font-bold opacity-50 text-3xl">Education</h1>
                    <div className="border border-black w-10 justify-center mx-auto mt-1" />
                    <div className="border border-black w-16 mt-1 justify-between mx-auto" />
                </div>

                <aside className="flex justify-center items-center mt-10 space-x-10">
                    <img src="src/assets/assetPorto.jpeg" alt="" 
                        className="w-[23%] rounded-lg" />
                    
                    {/* Menempatkan teks dan ikon dalam satu kolom */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-jakarta font-bold mb-4">Education</h1>
                            <img src={Kindergarten} alt="" className="w-10 h-10"/>
                        
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Education;
