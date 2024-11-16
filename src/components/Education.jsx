import React from "react";
import Kindergarten from '../assets/Kindergarten.svg';
import SchoolIcon from '../assets/School.svg';
import HighSchoolIcon from '../assets/HighSchool.svg';
import CardActivity from "./CardActivity";
import CardAchievement from "./CardSagasitas";
import CardTrigora from "./CardTrigora";
import Soon from "./Soon";

function Education() {
    return (
        <section className="mt-32">
            <div>
                <div>
                    <h1 className="text-center font-jakarta font-bold opacity-50 text-3xl">Activity & Achievement</h1>
                    <div className="border border-black w-10 justify-center mx-auto mt-2" />
                    <div className="border border-black w-16 mt-1 justify-between mx-auto" />
                </div>

                    <div className="flex justify-center items-center mt-10 space-x-10">
                        <CardActivity/>
                        <CardAchievement/>
                    </div>
                    <div className="mt-10 flex justify-center items-center space-x-10">
                        <CardTrigora/>
                        <Soon/>
                    </div>
            </div>
        </section>
    );
}

export default Education;
