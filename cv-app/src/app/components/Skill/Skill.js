import { Component } from "react";

export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        name: "",
      },
      { ...props.info }
    );
  }

  render() {
    const { name } = this.state;
    return (
      <div className="fieldset">
        <input
          type="text"
          placeholder="Skill"
          name="name"
          value={name}
          onChange={this.handleInput}
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
}
