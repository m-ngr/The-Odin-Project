import { Component } from "react";

export default class PreviewPersonal extends Component {
  render() {
    const { firstName, lastName, title, address, phone, email, description } =
      this.getPrintableText();

    return (
      <section>
        <span>{`${firstName} ${lastName}`}</span>
        <span>{title}</span>
        <span>{address}</span>
        <span>{phone}</span>
        <span>{email}</span>
        <span>{description}</span>
      </section>
    );
  }

  getPrintableText() {
    let { firstName, lastName, title, address, phone, email, description } =
      this.props.info;

    firstName = firstName || "First Name";
    lastName = lastName || "Last Name";
    title = title || "Title";
    address = address || "Address";
    phone = phone || "Phone Number";
    email = email || "example@domain.com";
    description = description || "Description";

    return { firstName, lastName, title, address, phone, email, description };
  }
}
