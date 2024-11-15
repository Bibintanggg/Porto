import React from "react";
import Kindergarten from '../assets/Kindergarten.svg';
import SchoolIcon from '../assets/School.svg';
import HighSchoolIcon from '../assets/HighSchool.svg';
import CardActivity from "./CardActivity";
import CardAchievement from "./CardSagasitas";
import CardTrigora from "./CardTrigora";

function Education() {
    return (
        <section className="mt-32">
            <div>
                <div>
                    <h1 className="text-center font-jakarta font-bold opacity-50 text-3xl">Activity & Achievement</h1>
                    <div className="border border-black w-10 justify-center mx-auto mt-2" />
                    <div className="border border-black w-16 mt-1 justify-between mx-auto" />
                </div>

                <aside className="flex justify-center items-center mt-10 space-x-10">
                    {/* <img src="src/assets/assetPorto.jpeg" alt="" 
                        className="w-[23%] rounded-lg" />
                    
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-jakarta font-bold mb-4">Education</h1>
                        
                        <div className="flex items-center space-x-4">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2YPU8bQRCGHx2uMA5ukUjBD6BDaQEJ8g/oQHRAS3pQwi/gP0BJRWH3fEQQIVIGQgGFBVRE4kNXBHC00os47LPvfOwdZ7KPtNJqd+admbuxfBpwOLqOAjAL/AZ+aW/OugYPmAKOgXrDOgXm8l5QQU/9JJD4ic5anRfy/gZOQ558XLvMSZpYbgryLCXyZgV5KQXOrCAvo0CpxXmrV+/ZipuXH6OXNI+8FJA4r7wW0Ehknvt5/8eN8QWxZy6+q8qwAgaBGWAVqAJHQA34o1XTWUU20/KJwoZuQTmb3HfDgpSAL8BhyEdf3HUojXJAt2xRt9TuKfUCX4GrgOM5sAbMA6PAAFAM+BR1Zu4WZHsR8L8GvgErwI1F3SvlanJu4oeMHoANYFw/sE7x5LshrXqKuvthhj7wFxjGHsPSTEvXD7v0W128ksx1fVdIe9wbicC1VlJca0XgWisprrUicK2VFNdaEbjWSoprrQj+z9b6GHPaUZXNTMi0I0vdFxcfgEUL045FTTvS1m3CHN4DlwFHs1/XJCNs2tGnszHZrDf4X0gzLV2/uYxno0dgE5gEeugc4/NZw7XGJ1qxoLupHJ80WxYygj0+AQcaNZm9LUbiFNIt1KMKsbF2Wow1S5rT2ozVxLblAKalJjTWLGp/YDnGFikyBJy1CX4mm66gH1gGfgJ3wK32S7pzvHv+AVYG/ZDdKoL1AAAAAElFTkSuQmCC" 
                                alt="" 
                                className="w-14 h-14"/>
                            <span className="text-lg font-bold font-jakarta opacity-50">TK Kemala Bhayangkari </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO2ay2sUQRCHPx8hRBY3ajT4FiSKJBcVvURFFP8AQ3KKz0suohfFQHJQ4iEPD2oOSkRUjHqIuXszHjTiEhTFiBEx+LiEgKggiggrBbXQFLMzs7uzj4H8oKCZmqrub6a7prcTKI0eA7+A10AnUENMlTb2GWgHqok5SFrtLzAFrCcm+uADI9ZKTJQAdgCngVkPkDZiqFpgAPjpgDQTY1UDTWqxePqDwBVtx1JJ4LkzfV4AS4k5RDqOMMksELGCqQVSZuCX1NxrqUpeM0mPNyEAGfXG4c0kAyBiAZMMCVHRMMkcISoSJpknREXB1GapTlbLgd1qdR7+slazRAiI1cAo8M+5R9oP1BcEkygFyKkAiHrgk88HUXwrAmBOlgLkvNPhQw//HTOoWY/fILc94iRXxi99lBTklvEtAv44/i7H1+1c/+1xACG5KgakyfEJ0ELHV2UgG8sFsgBYAvT5gGwxi9tdtAmz+Df7gPRpX9JnJKrRc6hJM4hsIPLUfzj+m7r467Wduf7dvC0LknYexhvgbCFnYSuBVz7VR2zII+5iQIxYv0fc9YCYlzqmnDQfGA9ILE91l0esLPhnPnHjeo/VHvM2veypji20Wj2+FY06bzMm0yibanTBfjGni+cCpkiV6UP6vGzG0pILyD0ncITCtCyCPdSoM57hXAKfOIHHKL+OO+ORsYVWKssp4E6dpxO6DvZHONgDmnNC+5CTyYzazF6sYJB+M1+lpEYltzzbyhY5yEDAd6QQ2e+I9FU0kG6PahaVbHXqKiaIlM5DQAdwBFjsk2MVcEKPTAe1Ldf8fnEe1dztpkxHDhJGsj+6YDaI7q63J489VFupQeYBd0NsUYb13rKB1AFndCMpG7k1PvVe7Kvux4a07foOm9i1mrNT+6grJkiPGcxVE/fO8T0ya0jaY47/rYm9ZnL3lKv8bjC+jR55G8w968pVfntNZzccX7NzfcYn90yWP7lJLjd3bzFBNulClY3kfWCr49vrxEz75J527pOYjLZpzhHto6GYIH4qFMRPcyAp56lJOdwewjryeCMdIXN3RjG18rGwIPlYKtf/5imkMzn5yKbJAnOP5QIiP5jeA9/ysI/AQZ/cLXpPPrmngH25gMyJMuk/XFl04xXkhFEAAAAASUVORK5CYII" 
                                alt="" 
                                className="w-14 h-14"/>
                            <span className="text-lg font-bold font-jakarta opacity-50">SDN Bidaracina 03 Pagi </span>
                        </div>
                    </div> */}
                    <CardActivity/>
                    <CardAchievement/>
                </aside>
                        <div className="mt-10 ">
                            <CardTrigora/>
                        </div>
            </div>
        </section>
    );
}

export default Education;
