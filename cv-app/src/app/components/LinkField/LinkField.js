import { Component } from "react";

export default class LinkField extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        title: "",
        url: "",
      },
      { ...props.info }
    );
  }

  render() {
    const { title, url } = this.state;
    return (
      <div className="fieldset">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <input
          type="url"
          placeholder="Link"
          name="url"
          value={url}
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
