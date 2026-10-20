import React from "react";
import StyledExperience from "./styled";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceAssets } from "../../constants/assets";

const Experience = () => {
  return (
    <StyledExperience>
      <div className="sub-heading">WHAT I HAVE DONE SO FAR...</div>
      <div className="heading-1">WORK EXPERIENCE</div>

      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Oct 2025 - Present"
            iconStyle={{ background: "#fff", color: "#1f70c1" }}
            icon={
              <span className="timeline-logo" role="img" aria-label="IBM">
                IBM
              </span>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              IBM
            </h4>
            <ul>
              <li>
                Build web applications using Angular, Java Vert.x, Spring Boot,
                DB2, and Couchbase.
              </li>
              <li>
                Contribute to migration work from Couchbase to HCD (DataStax).
              </li>
              <li>
                Contribute to AS2 certification automation for the SCBN Hub,
                including contact management.
              </li>
              <li>
                Participate in design discussions and contribute to architecture
                and solution decisions.
              </li>
              <li>Deploy applications and support releases.</li>
              <li>Take on-call manager responsibilities.</li>
              <li>
                Verify and analyze logs when issues are reported or systems are
                not working to help identify the cause.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Aug 2025 - Oct 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.amazon}
                alt="Amazon"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Temporary Software Development Engineer I
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              Amazon (Payroll: VARITE)
            </h4>
            <ul>
              <li>
                Reviewed AI-generated code responses for correctness and quality
                across programming prompts.
              </li>
              <li>
                Developed unit tests to verify the functional accuracy of
                generated code.
              </li>
              <li>
                Created and executed scripts across multiple operating systems
                for cross-platform compatibility.
              </li>
              <li>
                Worked with Go, Java, JavaScript, TypeScript, Python, Ruby, and
                Scala.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Dec 2023 - Jul 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.vatice}
                alt="Vatic AI"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Junior Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              Vatic AI, Thailand (WFH)
            </h4>
            <ul>
              <li>
                Delivered dynamic web applications using React JS, Python
                FastAPI, and MySQL, reducing API response times by 15% through
                optimized database queries.
              </li>
              <li>
                Integrated Ads APIs (Google, Meta, X, TikTok), enhancing
                campaign management efficiency by 20%.
              </li>
              <li>
                Partnered with cross-functional teams to achieve seamless
                project delivery within strict timelines.
              </li>
              <li>
                Resolved critical bugs and improved system performance, boosting
                platform uptime to 99.9%.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Oct 2023 - Dec 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.junglework}
                alt="Jungle Works"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Associate Software Development Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              Jungle Works, Chandigarh
            </h4>
            <ul>
              <li>
                Enhanced the Mappr team’s website functionality using angular
                and NodeJS.
              </li>
              <li>
                Worked closely with designers and product managers to translate
                requirements into code.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Aug 2023 - Oct 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.hummingbird}
                alt="Humming Bird Web Solutions"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Associate Software Development Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              Humming Bird Web Solutions, Pune
            </h4>
            <ul>
              <li>
                Worked as a Magento developer, contributed in building and
                maintaining e-commerce websites.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Jan 2023 - Jun 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.amazon}
                alt="Amazon"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              Amazon, Chennai
            </h4>
            <ul>
              <li>
                Built the Kindle Page Number feature for personal documents,
                enabling accurate pagination and improving user experience by
                10%.
              </li>
              <li>
                Developed functionality for publishing end-reading locations in
                eBooks, enhancing usability for over 1M active users.
              </li>
              <li>
                Utilized Java, Kotlin, and AWS to deliver robust backend
                solutions, achieving a 98% on-time delivery rate in a fast-paced
                environment.
              </li>
              <li>
                Wrote unit tests and integration tests, improving code quality
                and reducing bugs by 30%.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E3050", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E3050" }}
            date="Sep 2022 - Jan 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={experienceAssets.viewzen}
                alt="ViewZen Labs"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle company-name">
              View Zen Labs Pvt. Ltd., Chennai
            </h4>
            <ul>
              <li>
                Contributed to the Data Form Builder project, delivering 5+
                reusable components using Angular and NodeJS, improving
                developer productivity by 25%.
              </li>
              <li>
                Showcased strong problem-solving skills by independently
                resolving 50+ reported bugs within project timelines.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </StyledExperience>
  );
};

export default Experience;
