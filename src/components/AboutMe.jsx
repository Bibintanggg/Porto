import React from "react";
import CardImage from "./CardImage";

function AboutMe() {
    return (
        <div id="aboutme" >
            <h1 className="text-4xl font-bold font-poppins text-center"
            >About Me</h1>
            <div className="flex items-center justify-center gap-24">
                <CardImage/>
                <p>Hello World</p>
            </div>
        </div>
    )
}

export default AboutMe;