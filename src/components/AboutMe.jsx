import React from "react";
import CardImage from "./CardImage"

function AboutMe() {
    return (
        <div id="aboutme" >
            <h1 className="text-4xl font-bold font-poppins text-center text-black text-opacity-50"
            >About Me</h1>
            <div className="border border-black w-10 justify-center mx-auto mt-2" />
                    <div className="border border-black w-16 mt-1 justify-between mx-auto" />
            <div className="flex  items-center justify-center gap-10">
                <CardImage/>
                <h1>Bintang Yudha Putra Purnomo</h1>
            </div>
        </div>
    )
}

export default AboutMe;