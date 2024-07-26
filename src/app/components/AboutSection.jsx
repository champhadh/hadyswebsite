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
        <li  class="text-purple-400">Wilfrid Laurier University, Waterloo ON</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Python, Java, C/C++, SQL, JavaScript, HTML/CSS, Ruby, PHP</li>
        <li>Frameworks/Tools: Tailwind CSS, Google Sheets, Power BI, Wireshark, Splunk, Bash, Linux + Linux Distributions </li>
        <li>Cybersecurity Skills: SIEM Tools, Cybersecurity Frameworks, Incident Response, Vulnerability Assessment, Network Security, Cryptography, Cloud Computing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
            <a 
              href="https://coursera.org/share/e4a7a989f3af4de30c261fea455edd3b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500"
            >
              Google Cybersecurity
            </a>
        </li>
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
          <p className="text-base lg:text-lg mb-4">
            Hi, I am Hady Wehbe. I am currently studying Computer Science at Wilfrid Laurier University. My courses have given me a broad knowledge of applying various technical skills and innovative solutions in the digital world.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Driven by a passion for cybersecurity, I am committed to safeguarding against cyber warfare and diminishing unethical acts. I aim to create a safer digital world through innovative security measures and proactive support. Let us connect and collaborate to build a secure cyberspace.
          </p>
          <p className="text-base lg:text-lg mb-4">
            I&apos;m currently seeking new opportunities for Winter 2025, hoping to gain more knowledge on integrated data solutions.
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
