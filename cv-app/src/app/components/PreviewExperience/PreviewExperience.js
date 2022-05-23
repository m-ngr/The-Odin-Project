import { Component } from "react";

export default class PreviewExperience extends Component {
  render() {
    const { position, company, city, from, to } = this.getPrintableText();

    return (
      <section>
        <span>{position}</span>
        <span>{company}</span>
        <span>{city}</span>
        <span>{from}</span>
        <span>{to}</span>
      </section>
    );
  }

  getPrintableText() {
    let { position, company, city, from, to } = this.props.info;

    position = position || "Position";
    company = company || "Company";
    city = city || "City";
    from = from || "From";
    to = to || "To";

    return { position, company, city, from, to };
  }
}
