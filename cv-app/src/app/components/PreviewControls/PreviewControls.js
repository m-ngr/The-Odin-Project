import "./PreviewControls.css";
import { Component } from "react";

export default class PreviewControls extends Component {
  render() {
    const { showExperience, showEducation, showSkills, showProjects } =
      this.props.controls;

    return (
      <details className="PreviewControls">
        <summary>Preview Controls</summary>
        <section className="details">
          <Checkbox
            name="showExperience"
            checked={showExperience}
            title="Show Experience"
            handler={this.props.handler}
          />
          <Checkbox
            name="showEducation"
            checked={showEducation}
            title="Show Education"
            handler={this.props.handler}
          />
          <Checkbox
            name="showSkills"
            checked={showSkills}
            title="Show Skills"
            handler={this.props.handler}
          />
          <Checkbox
            name="showProjects"
            checked={showProjects}
            title="Show Projects"
            handler={this.props.handler}
          />
        </section>
      </details>
    );
  }
}

function Checkbox({ name, checked, handler, title }) {
  return (
    <div className="check-wrapper">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={handler}
      />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}
