import React from "react";

function SkillsImage() {
    return (
        <section className="flex justify-center space-x-8 mt-10 font-jakarta">
            <div className="text-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nL2VMQ7CIBSGv6Fr3T2Lx7BL2dwc3Vy9QY/RxDu4mHgWb9BBq7i8Jo2BAsLzTxjKo/8HDx4AXAGr1C4omlvgPgfUlFPtApSWjQVsgMrRX0ksC9AAT6B3xHqJNb8CtsADGIE2EDepgJB5DMQLiDUPQZyANTDIdzcbHFIn/wzi4QUszcgn34qj98B4rZfTmXSKTKJ5FEC9Dv5SyTlSvU1XLoDae3BTBJxT8mkdrZhsCUArhZOblhHYfZvvgVfB3L+Bw2R+lA6NTT59AFL0EORM26ZoAAAAAElFTkSuQmCC" alt="google-code"
                    className="mx-auto w-10 h-10 opacity-50"
            /> 
                <p className="mt-2 font-bold opacity-50">Web Development</p>
            </div>

            <div className="text-center">
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO2TwQ3CMAxF3xkG6gog1kNlH9iEcgJ1BnOgSEgtKG1DFCf/Sb44auJX2yCEEF7ZAiegByzz6IEW2EyJtBkUaDPjOCXyGA4b8qcZar1PHb4tvWDf6o0h8u9RWiRyAG5AB+wD8tmKdB+5a0D+5+UrMYnwGptu+Ou7gHy2o7WEYkRSYtWImLMYUZyIF0winjtiCeZ67Xd1isRi6RsmkVI7Ygl2RCIhHUlBko6kQKNFzcseC4mgjqTfkWi7VbRIzphEvHXEnMWISwZF2cw4jzWEEAIHPAHz4zGW6glJagAAAABJRU5ErkJggg==" 
                    alt="UI/UX Designer Icon" 
                    className="mx-auto w-10 h-10 opacity-50"
                />
                <p className="mt-2 whitespace-nowrap font-bold opacity-50">UI/UX Designer</p>
            </div>
        </section>
    );
}

export default SkillsImage;
