import "./PreviewCV.css";
import { Component } from "react";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewExperience from "../PreviewExperience/PreviewExperience";
import PreviewPersonal from "../PreviewPersonal/PreviewPersonal";

export default class PreviewCV extends Component {
  render() {
    const { personal, experience, education } = this.props.info;
    return (
      <div className="PreviewCV">
        <PreviewPersonal info={personal} />
        <ExperienceList info={experience} />
        <EducationList info={education} />
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
