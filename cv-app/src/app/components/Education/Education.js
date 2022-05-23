import { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
      { ...props.info }
    );
  }

  render() {
    const { university, city, degree, subject, from, to } = this.state;
    return (
      <section>
        <input
          type="text"
          placeholder="University"
          name="university"
          value={university}
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
          placeholder="Degree"
          name="degree"
          value={degree}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={subject}
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
