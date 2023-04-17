import { Component } from "react";

export default class PreviewExperience extends Component {
  render() {
    const { position, company, description, from, to } =
      this.getPrintableText();

    return (
      <section className={this.props.className}>
        <div>
          <h4>{position}</h4>
          <span>{`${company} | ${from} - ${to}`}</span>
        </div>
        <p>{description}</p>
      </section>
    );
  }

  getPrintableText() {
    let { position, company, description, from, to } = this.props.info;

    position = position || "Position";
    company = company || "Company";
    description = description || "";
    from = from || "From";
    to = to || "To";

    return { position, company, description, from, to };
  }
}
