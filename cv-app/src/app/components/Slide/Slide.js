import "./Slide.css";
import { Component } from "react";

export default class Slide extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <article className="Slide">
        <h2>{title}</h2>
        {children}
      </article>
    );
  }
}
