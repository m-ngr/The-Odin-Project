import { Component } from "react";

export default class PreviewEducation extends Component {
  render() {
    const { university, description, course, from, to } =
      this.getPrintableText();
    return (
      <section className={this.props.className}>
        <div>
          <h4>{course}</h4>
          <span>{`${university} | ${from} - ${to}`}</span>
        </div>
        <p>{description}</p>
      </section>
    );
  }
  getPrintableText() {
    let { university, description, course, from, to } = this.props.info;

    university = university || "University";
    description = description || "";
    course = course || "Course";
    from = from || "From";
    to = to || "To";

    return { university, description, course, from, to };
  }
}
