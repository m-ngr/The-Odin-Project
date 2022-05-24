import { Component } from "react";

export default class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      { ...props.info }
    );
  }

  render() {
    const { firstName, lastName, title, address, phone, email, description } =
      this.state;

    return (
      <div className="fieldset">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          name="firstName"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          name="lastName"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          name="address"
          onChange={this.handleInput}
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          name="phone"
          onChange={this.handleInput}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.handleInput}
        />
        <textarea
          placeholder="Description"
          value={description}
          name="description"
          onChange={this.handleInput}
        />
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.update) this.props.update(this.state);
    });
  };
}
