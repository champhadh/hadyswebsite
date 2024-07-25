"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Jr. Analyst - Zartek Global Cybersecurity Network</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Wilfrid Laurier University, Waterloo ON</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Python, Java, C/C++, SQL, JavaScript, HTML/CSS</li>
        <li>Google Professional Cloud Developer</li>
        <li>Frameworks/Tools: React, Node.js, Flask, BeautifulSoup, ExpressJS, Power BI, Tableau</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="description of image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m Hady Wehbe, a Software and Data Engineering student at Wilfrid Laurier University, Canada. Passionate about technological solutions, my interests lie in solving complex problems using data optimization and augmentation. My experiences and projects have further enhanced my experience through developing analytic-driven strategies with an emphasis on identifying threats and refining systematic solutions.
            <br />
            Beyond Academics, I&apos;m an avid soccer fan and bodybuilding enthusiast, valuing strategy and discipline. Feel free to connect with me to learn more about my skills and experiences or if you&apos;re looking for advice on bodybuilding!
            <br />
            I&apos;m currently seeking new opportunities for Summer 2024, hoping to gain more knowledge on integrated data solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
