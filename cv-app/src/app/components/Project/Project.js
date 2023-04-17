import { Component } from "react";
import ControlledList from "../ControlledList/ControlledList";
import LinkField from "../LinkField/LinkField";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        title: "",
        description: "",
        links: [],
      },
      { ...props.info }
    );
  }

  render() {
    const { title, description, links } = this.state;
    return (
      <div className="fieldset">
        <input
          type="text"
          placeholder="Project Title"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={this.handleInput}
        />

        <ControlledList
          type={<LinkField />}
          info={links}
          update={this.updateLinks}
          addTitle="Add Link"
        />

        <button onClick={this.props.remove}>Delete</button>
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.update) this.props.update(this.state);
    });
  };

  updateLinks = (info) =>
    this.setState({ links: info }, () => {
      if (this.props.update) this.props.update(this.state);
    });
}
