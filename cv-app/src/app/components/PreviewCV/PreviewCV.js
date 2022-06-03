import "./PreviewCV.css";
import { Component } from "react";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewExperience from "../PreviewExperience/PreviewExperience";
import PreviewPersonal from "../PreviewPersonal/PreviewPersonal";
import ReactToPrint from "react-to-print";
import PreviewSkill from "../PreviewSkill/PreviewSkill";

export default class PreviewCV extends Component {
  render() {
    const { personal, experience, education, skills } = this.props.info;
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return (
              <i className="fa-solid fa-print print-btn" title="Print CV"></i>
            );
          }}
          content={() => this.componentRef}
        />
        <div className="PreviewCV" ref={(el) => (this.componentRef = el)}>
          <PreviewPersonal info={personal} />
          <ExperienceList info={experience} />
          <EducationList info={education} />
          <SkillList info={skills} />
        </div>
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
          <PreviewSkill key={skill.id} info={skill} className="llist-item" />
        ))}
      </div>
    </section>
  );
}
