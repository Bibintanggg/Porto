import React from "react";
import Scroll from '/src/assets/Scroll.svg';   

function Home() {
    return (
        <section className="flex flex-col items-center justify-center h-full text-center px-6 pt-20" 
        id="home" >
            <h1 className="text-[3.5rem] font-bold text-purple-800 leading-10 font-poppins">
                Bintang Yudha
            </h1>

        <h3 className="text-4xl font-bold text-purple-700 mt-3 flex font-poppins text-left">

            <h2 className="text-3xl font-bold text-purple-700 mx-1 mt-1">
                FrontEnd Dev | UI/UX Designer
            </h2>
        </h3>

        <p className="text-lg text-gray-600 mt-4 max-w-xl font-poppins">
           A Student of Computer Informatics Engineering <br /> <span>Education</span>
        </p>

        <button className="mt-10 px-6 py-3 text-white rounded-full animate-bounce transition"
        onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
        
            
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2ZTWsUQRCGH1eixi+UaPATFCWIh6AowT8gQsCoIF7Vu94E9QeIQhDJWfMTcowQRFERI64XjVHEb9GLRkWSg4JmpOAdGELC9qxds0OcB5odZrrfqp6u6Zmtgor5QSdwAhgAbgKvgW/AL7WvwCtdG1Dfta12egFwCLgD/AaSnM3G3Ab6pFUoO4F6xpmfwDBwFugFuoAOYJFah871qs+wxiRqdWkWwhFgUoY/AqeAlU3o2JjTwCdpmeZhnNmXuXPXgPYImu3AYGYle3BiMfBBhi446F+S9nvZis5JGbgP1AJ3pnuKbztuRA0YlY3jOHBD4kcD+prDY5mHdCxwEsfU/xYOvJP4ppzO55nEZvW190Z00r2+Ufik2+vMFbDfhw3GLlS/aRxInWmExfEj3e10TKfOjUa0k5tmhIsaE0Q1gUCSagX+94e4/g/baCkmYH9UnszyInsOrItoJzd5hGdOItT50kwAxX09x8dc6SZQOjtJNYEwkmoF5qAKoUCSKoTmawj9kXAbfrRl0o7RSbNxG/Bjo2z88BB/I/Fd+LFbNiy77ZYXOogffbIx4iF+UeKX8eOKY+qSAxIfx49x2djvtUNMyEC3g363tCc8d7p+GRly0B6StmWpXbe5KaX+rFYQix5pmvZ6nDmfyePHKNStAd5K8xwFUFONK1GBr5nyUspypdJN63pg3SEKq4AXMvwU2NqExhbgsTReAqspGFv6u3JgSg/fioBxS1Wp/K6xD3JkLKKzRAW6aTnzRcU/qx/vUIgs07Gduwp8ztQABqXRcvaoCh9a5La430sJ2Qac0bfMM33BTup4RNe2t9rJCiLyF7o1HYlpBRyrAAAAAElFTkSuQmCC" alt="mouse-scrolling"></img>
        </button>
    </section>
    );
}

export default Home;
    