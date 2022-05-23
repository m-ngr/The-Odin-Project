import { Component } from "react";

export default class PreviewEducation extends Component {
  render() {
    const { university, city, degree, subject, from, to } =
      this.getPrintableText();
    return (
      <section>
        <span>{university}</span>
        <span>{city}</span>
        <span>{degree}</span>
        <span>{subject}</span>
        <span>{from}</span>
        <span>{to}</span>
      </section>
    );
  }
  getPrintableText() {
    let { university, city, degree, subject, from, to } = this.props.info;

    university = university || "University";
    city = city || "City";
    degree = degree || "Degree";
    subject = subject || "Subject";
    from = from || "From";
    to = to || "To";

    return { university, city, degree, subject, from, to };
  }
}
