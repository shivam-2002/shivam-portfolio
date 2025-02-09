import './App.css';
import {useState, useEffect, useRef} from "react";
import {menuAssets, menuFillAssets} from "./constants/assets";

import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [activePageNumber, setActivePageNumber] = useState(0);
  const sectionId = ['about', 'experience', 'projects', 'skills', 'certification', 'contact'];

  const handleClick = (pageNo) => {
      setActivePageNumber(pageNo);
      const element = document.getElementById(sectionId[pageNo - 1]);
      if (element) element.scrollIntoView({ behavior: "smooth" });
  }

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
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);


    return (
      <div className="App">
        <div className="menu-column">
          <div onClick={() => handleClick(1)} className={activePageNumber === 1 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 1 ? menuFillAssets.about : menuAssets.about}
                alt="A"
                className="icon-img"
            />
            <div className={activePageNumber === 1 ? "active-font menu-font" : ' menu-font'}>About</div>
          </div>
          <div onClick={() => handleClick(2)} className={activePageNumber === 2 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 2 ? menuFillAssets.experience : menuAssets.experience}
                alt="E"
                className="icon-img"
            />
            <div className={activePageNumber === 2 ? "active-font menu-font" : ' menu-font'}>Experience</div>
          </div>

          <div onClick={() => handleClick(3)} className={activePageNumber === 3 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 3 ? menuFillAssets.project : menuAssets.project}
                alt="P"
                className="icon-img"
            />
            <div className={activePageNumber === 3 ? "active-font menu-font" : ' menu-font'}>Projects</div>
          </div>

          <div onClick={() => handleClick(4)} className={activePageNumber === 4 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 4 ? menuFillAssets.skill : menuAssets.skill}
                alt="S"
                className="icon-img"
            />
            <div className={activePageNumber === 4 ? "active-font menu-font" : ' menu-font'}>Skills</div>
          </div>

          <div onClick={() => handleClick(5)} className={activePageNumber === 5 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 5 ? menuFillAssets.certificate : menuAssets.certificate}
                alt="C"
                className="icon-img"
            />
            <div className={activePageNumber === 5 ? "active-font menu-font" : ' menu-font'}>Certification</div>
          </div>

          <div onClick={() => handleClick(6)} className={activePageNumber === 6 ? "active-menu" : ""}>
            <img
                src={activePageNumber === 6 ? menuFillAssets.contact : menuAssets.contact}
                alt="C"
                className="icon-img"
            />
            <div className={activePageNumber === 6 ? "active-font menu-font" : ' menu-font'}>Contact</div>
          </div>

        </div>

          <div className="main-ctn">
              <div className="header">
                  Shivam Kumar | Software Development Engineer
              </div>

              <div className="ctn">
                  <div id="about">
                      <About/>
                  </div>

                  <div id="experience">
                      <Experience/>
                  </div>

                  <div id="projects">
                      <Project/>
                  </div>

                  <div id="skills">
                      <Skill/>
                  </div>

                  <div id="certification">
                      <Certification/>
                  </div>

                  <div id="contact">
                      <Contact/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
