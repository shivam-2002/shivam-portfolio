import "./App.css";
import { useState, useEffect, useRef } from "react";
import { menuAssets, menuFillAssets } from "./constants/assets";

import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [activePageNumber, setActivePageNumber] = useState(0);
  const sectionId = [
    "about",
    "experience",
    "projects",
    "skills",
    "certification",
    "contact",
  ];
  const navigation = [
    { label: "About", icon: "about" },
    { label: "Experience", icon: "experience" },
    { label: "Projects", icon: "project" },
    { label: "Skills", icon: "skill" },
    { label: "Certification", icon: "certificate" },
    { label: "Contact", icon: "contact" },
  ];

  const handleClick = (pageNo) => {
    setActivePageNumber(pageNo);
    const element = document.getElementById(sectionId[pageNo - 1]);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionId.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActivePageNumber(index + 1); // Page number starts from 1
            }
          }
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <nav className="menu-column" aria-label="Portfolio sections">
        {navigation.map((item, index) => {
          const isActive = activePageNumber === index + 1;
          const iconAssets = {
            about: [menuAssets.about, menuFillAssets.about],
            experience: [menuAssets.experience, menuFillAssets.experience],
            project: [menuAssets.project, menuFillAssets.project],
            skill: [menuAssets.skill, menuFillAssets.skill],
            certificate: [menuAssets.certificate, menuFillAssets.certificate],
            contact: [menuAssets.contact, menuFillAssets.contact],
          };

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleClick(index + 1)}
              className={isActive ? "active-menu" : ""}
              aria-label={item.label}
              aria-current={isActive ? "location" : undefined}
            >
              <img
                src={iconAssets[item.icon][isActive ? 1 : 0]}
                alt=""
                className="icon-img"
              />
              <span className="menu-font">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="main-ctn">
        <div className="header">
          <a
            className="brand-mark"
            href="#about"
            aria-label="Shivam Kumar, back to about"
          >
            SK
          </a>
          <div className="header-copy">
            <strong>Shivam Kumar</strong>
            <span>Software Development Engineer</span>
          </div>
          <a className="header-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="ctn">
          <div id="about">
            <About />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="projects">
            <Project />
          </div>

          <div id="skills">
            <Skill />
          </div>

          <div id="certification">
            <Certification />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
