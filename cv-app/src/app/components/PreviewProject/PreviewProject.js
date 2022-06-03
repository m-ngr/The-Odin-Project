import { Component } from "react";

export default class PreviewProject extends Component {
  render() {
    const { title, description, links } = this.getPrintableText();
    return (
      <section className={this.props.className}>
        <h4>{title}</h4>
        <p>{description}</p>
        {links.map((link) => (
          <p key={link.id}>
            <b> - {link.title}: </b>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.url}
            </a>
          </p>
        ))}
      </section>
    );
  }
  getPrintableText() {
    let { title, description, links } = this.props.info;

    title = title || "Project";
    description = description || "";

    return { title, description, links };
  }
}
