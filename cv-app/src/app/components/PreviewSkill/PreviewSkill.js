import { Component } from "react";

export default class PreviewSkill extends Component {
  render() {
    const { name } = this.getPrintableText();
    return <p className={this.props.className}>{name}</p>;
  }
  getPrintableText() {
    let { name } = this.props.info;

    name = name || "Skill";

    return { name };
  }
}
