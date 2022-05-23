import { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      { position: "", company: "", city: "", from: "", to: "" },
      { ...props.info }
    );
  }

  render() {
    const { position, company, city, from, to } = this.state;
    return (
      <section>
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={position}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="From"
          name="from"
          value={from}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="To"
          name="to"
          value={to}
          onChange={this.handleInput}
        />
        <button onClick={this.props.remove}>Delete</button>
      </section>
    );
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.update) this.props.update(this.state);
    });
  };
}
