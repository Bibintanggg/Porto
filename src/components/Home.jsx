import React from "react";

function Home() {
    return (
        <section className="flex flex-col items-center justify-center h-full text-center px-6 pt-20" id="home">
            <h1 className="text-[3.5rem] font-bold text-purple-800 leading-10 font-poppins">
                Bintang Yudha
            </h1>

        <h3 className="text-4xl font-bold text-purple-700 flex font-poppins text-left">17th 
            <span className="mx-4">|</span>

            <h2 className="text-xl font-semibold text-purple-700 mx-1 mt-1">
                FrontEnd Dev, UI/UX Designer
            </h2>
        </h3>

        <p className="text-lg text-gray-600 mt-4 max-w-xl">
            Kamar Kreasi menghadirkan dekorasi berkualitas yang mendukung aktivitas dan kenyamanan Anda. Temukan kesempurnaan dalam setiap sudut kamar Anda!
        </p>

        <button className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
            Mulai Dekorasi Sekarang!
        </button>
    </section>
    );
}

export default Home;
    