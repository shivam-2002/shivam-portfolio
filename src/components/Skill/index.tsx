import React from "react";
import StyledSkill from "./styled";

const Skill = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Angular",
        "FastAPI",
        "Node.js",
        "Spring Boot",
      ],
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB", "Couchbase", "DB2"],
    },
    {
      title: "Tools & Others",
      skills: [
        "AWS",
        "GCP",
        "Argo CD",
        "Bash",
        "Git",
        "GitHub",
        "OOP",
        "Linux",
        "Kafka",
      ],
    },
  ];

  return (
    <StyledSkill>
      <div className="sub-heading">TOOLS & TECHNOLOGIES</div>
      <div className="heading-1">SKILLS</div>
      <div className="sub-heading">
        Technologies I use to build, test, and ship software across the stack.
      </div>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </StyledSkill>
  );
};

export default Skill;
