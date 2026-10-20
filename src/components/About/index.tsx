import React from "react";
import StyledAbout from "./styled";
import { aboutAssets } from "../../constants/assets";

const About = () => {
  return (
    <StyledAbout>
      <div className="eyebrow">
        <span className="availability-dot" /> SOFTWARE ENGINEER{" "}
        <span className="eyebrow-divider">/</span> INDIA
      </div>
      <div className="heading-1">Hello, I'm Shivam</div>
      <div className="text">
        <p>
          I’m a software engineer focused on full-stack applications and backend
          systems. At IBM, I build web applications with Angular, Java Vert.x,
          Spring Boot, DB2, and Couchbase, and contribute to AS2 certification
          automation, contact management, and migration work from Couchbase to
          HCD (DataStax). I also deploy applications, take on-call manager
          responsibilities, and verify logs when issues are reported or systems
          are not working.
        </p>
        <p>
          Previously, I worked at Vatic AI on React, FastAPI, and MySQL
          products, integrating advertising platforms and Google Gemini. My
          Amazon roles included developing Kindle features and evaluating
          AI-generated code with unit tests and cross-platform scripts.
        </p>
        <p>
          I earned a B.Tech in Computer Science and Engineering from Lovely
          Professional University in 2023. I enjoy solving practical engineering
          problems, collaborating across teams, and improving reliability
          through thoughtful implementation and testing.
        </p>
        <p>
          Outside of engineering, I’ve contributed around 200 hours to CSR
          volunteering. My work has been recognized with the IBM Volunteers -
          Bronze and IBM Volunteers Engagement Award badges.{" "}
          <a
            href="https://www.credly.com/users/shivam-kumar.063d3d55/badges/credly"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Credly badges
          </a>
          .
        </p>
      </div>

      <div className="profile-container">
        <img
          src={aboutAssets.profile}
          alt="Profile"
          className="profile-picture"
        />
        <div className="portrait-caption">
          <strong>Shivam Kumar</strong>
          <span>Building useful things, thoughtfully.</span>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
