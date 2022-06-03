import "./PreviewCV.css";
import { Component } from "react";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewExperience from "../PreviewExperience/PreviewExperience";
import PreviewPersonal from "../PreviewPersonal/PreviewPersonal";
import PreviewSkill from "../PreviewSkill/PreviewSkill";
import PreviewProject from "../PreviewProject/PreviewProject";

export default class PreviewCV extends Component {
  render() {
    const { personal, experience, education, skills, projects } =
      this.props.info;

    const { showExperience, showEducation, showSkills, showProjects } =
      this.props.controls;
    return (
      <div className="PreviewCV">
        <PreviewPersonal info={personal} />
        {showExperience ? <ExperienceList info={experience} /> : null}
        {showEducation ? <EducationList info={education} /> : null}
        {showSkills ? <SkillList info={skills} /> : null}
        {showProjects ? <ProjectList info={projects} /> : null}
      </div>
    );
  }
}

function ExperienceList({ info }) {
  return (
    <section className="list">
      <h3>Experience</h3>
      {info.map((exp) => (
        <PreviewExperience key={exp.id} info={exp} className="list-item" />
      ))}
    </section>
  );
}

function EducationList({ info }) {
  return (
    <section className="list">
      <h3>Education</h3>
      {info.map((ed) => (
        <PreviewEducation key={ed.id} info={ed} className="list-item" />
      ))}
    </section>
  );
}

function SkillList({ info }) {
  return (
    <section className="list">
      <h3>Skills</h3>
      <div className="grid-list">
        {info.map((skill) => (
          <PreviewSkill key={skill.id} info={skill} />
        ))}
      </div>
    </section>
  );
}

function ProjectList({ info }) {
  return (
    <section className="list">
      <h3>Projects</h3>
      {info.map((proj) => (
        <PreviewProject key={proj.id} info={proj} className="list-item" />
      ))}
    </section>
  );
}
