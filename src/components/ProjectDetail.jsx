import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll";

function ProjectDetail() {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div
            data-scroll-container
            className="relative w-full h-screen overflow-hidden"
        >
            <section className="h-screen w-full flex items-center justify-center bg-gray-100">
                <div className="grid grid-cols-3 gap-4 max-w-5xl">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            data-scroll
                            data-scroll-speed={(index % 2 === 0 ? -1 : 1) * 2}
                            className="bg-white shadow-md rounded-md overflow-hidden relative transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-300"
                        >
                            <img
                                src={`https://via.placeholder.com/300x200?text=Portfolio+${index + 1}`}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                                <p className="text-sm text-gray-600">
                                    Description of Project {index + 1}.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProjectDetail;
