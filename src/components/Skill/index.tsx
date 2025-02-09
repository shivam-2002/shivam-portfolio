import React from 'react';
import StyledSkill from "./styled";

const Skill = () => {
    const programming = [
        { name: "Python", level: 90 },
        { name: "Type Script", level: 90 },
        { name: "Java Script", level: 90 },
        { name: "Java", level: 75 },
        { name: "C", level: 50 },
        { name: "C++", level: 50 },
    ];

    const web = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "Python Fast API", level: 90 },
        { name: "React", level: 90 },
        { name: "SQL", level: 95 },
        { name: "MYSQL", level: 95 },
        { name: "Type Script", level: 90 },
        { name: "Java Script", level: 90 },
        { name: "Angular", level: 80 },
        { name: "Node JS", level: 80 },
    ];

    const dbms = [
        { name: "SQL", level: 95 },
        { name: "MYSQL", level: 95 },
        { name: "Mongo DB", level: 60 },
    ];

    const tools = [
        { name: "Git", level: 90 },
        { name: "Git Hub", level: 90 },
        { name: "PyCharm", level: 80 },
        { name: "WebStorm", level: 80 },
        { name: "VS Code", level: 80 },
        { name: "Postman", level: 80 },
    ];

    const os = [
        { name: "Window", level: 90 },
        { name: "Linux (Ubuntu)", level: 90 },
        { name: "Mac OS", level: 90 },
    ];

    const other = [
        { name: "AWS", level: 50 },
        { name: "GCP", level: 50 },
        { name: "Bash", level: 50 },
        { name: "OOPS", level: 80 },
        { name: "ML", level: 50 },
        { name: "OS", level: 80 },
        { name: "Computer Network", level: 50 },
    ];

    return (
        <StyledSkill>
            <div className="sub-heading">I EXCEL IN...</div>
            <div className="heading-1">SKILLS</div>
            <div className="sub-heading">A diverse skill set spanning frontend, backend, and database technologies, enabling me to build scalable and efficient solutions.</div>

            <div className="skills-container">
                <div className="skill-card">
                    <div>Programming Languages</div>
                    {programming.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-card">
                    <div>Web Development</div>
                    {web.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-card">
                    <div>DBMS</div>
                    {dbms.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-card">
                    <div>Tools</div>
                    {tools.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-card">
                    <div>Operating System</div>
                    {os.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-card">
                    <div>Others</div>
                    {other.map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <p className="skill-name">{skill.name}</p>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{width: `${skill.level}%`}}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </StyledSkill>
    )
}

export default Skill;
