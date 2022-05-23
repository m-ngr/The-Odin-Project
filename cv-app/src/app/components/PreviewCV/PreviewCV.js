import { Component } from "react";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewExperience from "../PreviewExperience/PreviewExperience";
import PreviewPersonal from "../PreviewPersonal/PreviewPersonal";

export default class PreviewCV extends Component {
  render() {
    const { personal, experience, education } = this.props.info;
    return (
      <article>
        <h2>Preview CV</h2>
        <PreviewPersonal info={personal} />
        <ExperienceList info={experience} />
        <EducationList info={education} />
      </article>
    );
  }
}

function ExperienceList({ info }) {
  return (
    <section>
      <h3>Experience</h3>
      {info.map((exp) => (
        <PreviewExperience key={exp.id} info={exp} />
      ))}
    </section>
  );
}

function EducationList({ info }) {
  return (
    <section>
      <h3>Education</h3>
      {info.map((ed) => (
        <PreviewEducation key={ed.id} info={ed} />
      ))}
    </section>
  );
}
