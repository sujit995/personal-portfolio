import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
    const info = [
        { text: "Years experience", count: "04" },
        { text: "Completed Projects", count: "24" },
        { text: "Companies Work", count: "06" },
    ];
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                            I love learning about new technologies, and solving problems to build better and scalable products.
                                Strong understanding of JavaScript (ES6), React.
                                Experience in building SPA in React.
                                Proficient in HTTP(s), DOM and browser page rendering.
                                Efficiency in writing code for responsive design.
                                Good experience on customizing CSS frameworks like Bootstrap and Tailwind CSS.
                            </p>
                            <br />
                            <a href="./src/assets/Code_a_program.pdf" download>
                                <button className="btn-primary" onClick={() => window.location = 'https://drive.google.com/file/d/1oxZ-jIsKpdQX19Jq9TxL-C1aWEPY6nx8/view?usp=sharing'}>Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;