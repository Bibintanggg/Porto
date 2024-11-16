import React from "react";

function Soon() {
    return (
        <section> 
            <div className="grid place-items-center">
                <div className="relative w-[35rem] h-[25rem] bg-gray-300 bg-opacity-40 rounded-lg grid place-items-center group">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                        <h1 className="text-5xl font-jakarta font-[900] text-black text-opacity-35">?</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Soon;
