import React from "react";
import SkillsImage from "./SkillsImage";
import TextSkills from "./TextSkills";

function Skills() {
    return (
        <section className="flex justify-center items-center mt-28">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-jakarta opacity-50">Skills</h1>
                <div className="border border-black w-10 justify-center mx-auto mt-1">
                </div>
                <div className="border border-black w-16 mt-1 justify-between mx-auto">
                </div>

                <p className="mb-4 font-jakarta font-medium mt-3 opacity-50">Crafting digital experiences that merge functionality with stunning design <br /> empowering users to navigate seamlessly.</p>
                <div className="mx-96">
                <SkillsImage />
                <TextSkills/>
                </div>
            </div>
        </section>
    );
}

export default Skills;
