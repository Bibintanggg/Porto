import React from "react";
import Lottie from "lottie-react";
import ContactPreLoader from '../assets/ContactLoad.json'
import InstagramIcon from '../assets/Instagram.svg';
import LinkedinIcon from '../assets/Linkedin.svg'
import TweetIcon from '../assets/Twitter.svg';
import DiscordIcon from '../assets/Discord.svg';
import GmailIcon from '../assets/Gmail.svg';
import TiktokIcon from '../assets/Tiktok.svg';
import MoreIcon from '../assets/Arrow.svg';
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="mt-[10rem]">
            <div className=" text-center flex-col flex">
                <p className="mr-10 font-jakarta font-medium">Information Contact</p>
                <h1 className=" font-poppins font-bold text-5xl">Contact</h1>
                <div className="border border-black w-10 justify-center mx-auto mt-3 rounded-full opacity-70"></div>
                <div className="border border-black w-16 mt-1 justify-between mx-auto rounded-full opacity-70"></div>
            </div>

            <div>
                <h2 className="text-center font-jakarta mt-10 text-3xl">Get In Touch</h2>
                <div className="w-20 mx-auto mt-[-5px]">
                <Lottie animationData={ContactPreLoader}/>
                </div>
                <p className="text-center">Feel free to reach out through any of the platforms below <br /> Let's connect and collaborate!</p>
            </div>

            <div className="flex space-x-10 justify-center mt-8">
                <div className="flex gap-x-2 font-jakarta">
                    <p className="mt-[-1.5%] text-base">Currently active on this platform</p>
                        <div className="w-5 h-5 bg-green-600 rounded-full opacity-60">
                            <div className="w-5 h-5 bg-green-600 rounded-full blur bg-opacity-60"></div>
                        </div>
                </div>

                <p>| |</p>

            <div className="flex gap-x-2 font-jakarta">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full opacity-60">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full blur bg-opacity-60"></div>
                        </div>
                        <p className="mt-[-1.5%] text-base">Available, but not very active in here</p>
                </div>

            </div>

            <div className="justify-center mx-auto flex mt-16 space-x-10">

            <a href="https://www.instagram.com/bintang.ydha_/" target="_blank">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={InstagramIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                        
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">Instagram</p>
                    <img src={MoreIcon} alt="Moreicon" 
                    className="w-5"/>
                    
                    <div className="w-3 h-3 bg-green-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-green-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>

                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">
                         Follow my creative <br /> journey and daily <br /> inspirations.</p>
                         <p className="text-sm font-jakarta opacity-85 mt-2">Follow me on Instagram</p>
                    </div>
                </div>
            </a>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={TweetIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">X</p>
                    <img src={MoreIcon} alt="Moreion" 
                    className="w-5"/>
                    <div className="w-3 h-3 bg-green-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-green-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>
                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">
                    Stay updated <br /> with my latest <br /> thoughts.</p>
                    <p className="text-sm font-jakarta opacity-85 mt-2">Follow me on X</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={GmailIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">Gmail</p>
                    <img src={MoreIcon} alt="Moreion" 
                    className="w-5"/>

                    <div className="w-3 h-3 bg-green-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-green-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>

                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">Reach out for <br /> professional inquiries <br />or collaborations.</p>
                    <p className="text-sm font-jakarta opacity-85 mt-2">Contact me here</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={LinkedinIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">Linkedin</p>
                    <img src={MoreIcon} alt="Moreion" 
                    className="w-5"/>
                    <div className="w-3 h-3 bg-yellow-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>
                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">Feel free to connect <br /> with me on LinkedIn and <br />start a conversation</p>
                    <p className="text-sm font-jakarta opacity-85 mt-2">Let's network on Linkedin</p>
                    </div>
                </div>
            </div>

            <div className="justify-center mx-auto flex mt-16 space-x-10">
                
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={DiscordIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">Discord</p>
                    <img src={MoreIcon} alt="Moreicon" 
                    className="w-5"/>

                    <div className="w-3 h-3 bg-yellow-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>
                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">Join me on Discord <br />  to chat, share ideas <br /> and collaborate!</p>
                    <p className="text-sm font-jakarta opacity-85 mt-2">Message Me on Discord</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full">
                        <img src={TiktokIcon} alt="InstagramIcon" 
                        className="mx-auto w-8 py-2 opacity-60" />
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                    <p className="font-jakarta font-medium">Tiktok</p>
                    <img src={MoreIcon} alt="Moreion" 
                    className="w-5"/>
                    <div className="w-3 h-3 bg-green-600 rounded-full opacity-100 mt-[4%] animate-pulse duration-75 ease-in">
                        <div className="w-3 h-3 bg-green-600 rounded-full blur bg-opacity-100 mt-[4%]"></div>
                    </div>
                        </div>
                    <div className="bg-black h-0.5 w-18 rounded-full opacity-70"></div>
                    <p className="text-sm font-jakarta mt-1 opacity-85">Join me online for <br /> updates, insights <br /> and creative collaborations</p>
                    <p className="text-sm font-jakarta opacity-85 mt-2">Let’s connect on TikTok </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;