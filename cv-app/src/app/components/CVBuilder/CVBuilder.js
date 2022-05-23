import { Component } from "react";
import ControlledList from "../ControlledList/ControlledList";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import PreviewCV from "../PreviewCV/PreviewCV";
import Slider from "../Slider/Slider";

export default class CVBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = { personal: {}, experience: [{}], education: [{}] };
  }

  render() {
    const { personal, experience, education } = this.state;

    return (
      <Slider>
        <PersonalInfo info={personal} update={this.updatePersonal} />
        <ExperienceList info={experience} update={this.updateExperience} />
        <EducationList info={education} update={this.updateEducation} />
        <PreviewCV info={this.state} />
      </Slider>
    );
  }

  updatePersonal = (info) => this.setState({ personal: info });
  updateExperience = (info) => this.setState({ experience: info });
  updateEducation = (info) => this.setState({ education: info });
}

function ExperienceList({ info, update }) {
  return (
    <ControlledList
      type={<Experience />}
      title={<h2>Experience</h2>}
      info={info}
      update={update}
    />
  );
}

function EducationList({ info, update }) {
  return (
    <ControlledList
      type={<Education />}
      title={<h2>Education</h2>}
      info={info}
      update={update}
    />
  );
}
