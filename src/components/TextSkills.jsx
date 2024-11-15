import React from "react";
import Skills from "./Skills";
import SkillsImage from "./SkillsImage";

function TextSkills() {
    return (
        <section>
            <div>
                <div className=" flex space-x-10 mt-10 font-source text-lg">
                    <div className="left-text ">
                        <div className="flex mx-auto justify-center gap-2">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABg0lEQVR4nO3YzysEYRzH8beLiDiIf0BSJOw6Iid7QE7u6yZSjnJQXCQuct31o5zcne2Z4iSX3TgRRY1yEEVTc9g08zxP8+Pp2fq+6rnt9zv7mWeemZ4HhBBCCCEaSgswAcwDQ4Y1eWDBwsibhlgF3oHfunELjClqFv/9PutR1IXYVhR/KsKULQcpqUIMAD+aBjcRtaNA1VKIKjASdzbqxyCOOzMMMofjDg2DjOO4WYMQb0BzSG07sAucpzRKwHDcIE1ARRNkKaJ2P4NF/UgCXcBlSNNvYFNRt5dBkAcS8mdmBjgIXgBbQL+mpg3YceXREkIIIdLQB5wCz8AXcA9sAK2KGn8/UrO0H6kF11OaAj4iGlwDnY7sEMuqEP6ffNU08GcqTNGlPfuKQQN/K9wTUZ+zdIqSQ+PY8G4UcNyRYZBpHLds+Gh1WzigKwSHhLH4i/1FE+TE4gHdBQlMAl5E4yugw+Lr1yOh3mDhPwUfxDtgXTPVaR/QecBa0iBCCCGEoAH9AeC33TKa4ErxAAAAAElFTkSuQmCC" alt="" 
                            className="w-6 h-6 mt-1"/>
                        <h1>Language & Framework</h1>
                        </div>
                        <p className="mt-4">HTML | CSS | JavaScript  <br /> 
                        ReactJS | Laravel | TailwindCSS |
                        MySQL | PHP  Bootstrap

                        </p>
                    </div>

                    <div className="right-text">
                        <div className="flex mx-auto justify-center gap-2">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2ZO2gUQRjHfzGgnRE51CONogjGwk58oBYq2CuKGFC3EbxCiEZECzufSaURJIXgA0HEB2phsBAELdSoaMRHYWFExWgj+NaVid/BOOzuze7M5i5h/zDFzd583/3uP9/s7gwUKlSo0FjURKALKOeYYy6wBzgD9AEngV3ALJ8Qt4EQ+Ai041czgEsSPzTaH6DiG0Jvlz25swj4UC+IUNoQsMwh/kxxOC5+BU/qSkhSbZ8cnOnT4nyRegi1pqacF5Vr/GPVpn5AWi0wYqyX/gGtb2vM2FXAvLQJ2y1ATmUAOaSNvxUzC67EQHwF9mXIOVzYSSBXM8S8ro3fpvUv1/q/y1K8AShpEOrataxTbKgGTEfKmP3a2NVa/3jgc0T838AP7fN9MmqpFLYvmJvauC3GtaPGj45qN3BQWQr7tEynrDCB/MPVMaouTLWIU73AYESeI3hURwYYE2JQ7ie1VDFyrMSz0sCYEG+A2RY5FgPvtXH3gCZykA2MDcRkmbprgCXAOuAs8FMbp1at+XlA2MDYQqiVKKnAvwFr84SoBeMD4gmwcCQgasEkQej3lBB4DrwGHslTg1q9mkcSIgkmCqIUAXGQBpJNTUyR6aJDqOevhtFmA+Id0BYB8diA6GYMOBECnYxyJ0Kt7WaUOtEDvGgUZwID4i0wJ0VNTAOe1tuZwMKJUowTulrr6Uxg4cQk4G5ELbwCphvfrYszgQNEw8AEGSG6I+74cTADecO4QFRlAzM1T5hNlk+x/RaPHZ3Gd15KweuKWgC2u0K0ybtAWojDCTGzwPySjb3MOuA4neKUZZoddwHp1QKdM96X0zphaqeFMz3a9QsuIBsjtmKaPEDYwOx13Aj8T+OMDbVQTpMeeIBIgjlm9D0EJuDhrOROwg3Ox/uEWpXi4j/zeezXIjvn5qnSfl8JgB3GMl91QhW9VzXLucV54ASwwncC/u2WqAXmorjkPJ0KFSpUiIbTX74LKrtafVVaAAAAAElFTkSuQmCC" alt="" 
                            className="w-5 h-5 mt-1"/>
                        <h1>Tools</h1>
                        </div>
                        <p className="mt-4">Visual Studio Code | Figma | Laragon 
                            <br /> GIT | GITHUB | Adobe Illustrator | Adobe Photoshop
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextSkills;