import React from "react";

import html from "../assets/skills/html5.png";
import css from "../assets/skills/css3.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import nextjs from "../assets/skills/nextjs.png";
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";
import nodejs from "../assets/skills/node-js.png";
import mongodb from "../assets/skills/mongodb.png";

const Skills = () => {
    const skill = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 7,
            src: nodejs,
            title: "Node JS",
            style: "shadow-green-400",
        },
        {
            id: 8,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },

    ];
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                {/* {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                            <div
                                style={{
                                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                }}
                                className="w-32 h-32 flex items-center justify-center rounded-full"
                            >
                                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                    <ion-icon name={skill.logo}></ion-icon>
                                </div>
                            </div>
                            <p className="text-xl mt-3">{skill.level}</p>
                        </div>
                    ))} */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center">
                    {skill.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;