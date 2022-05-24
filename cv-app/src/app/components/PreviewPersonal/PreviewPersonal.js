import { Component } from "react";
import "./PreviewPersonal.css";
export default class PreviewPersonal extends Component {
  render() {
    const { firstName, lastName, title, address, phone, email, description } =
      this.getPrintableText();

    return (
      <section className="PreviewPersonal">
        <h3>{`${firstName} ${lastName}`}</h3>
        <span>{title}</span>
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i>
            <span>{phone}</span>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <span>{email}</span>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>{address}</span>
          </li>
        </ul>
        <hr />
        <p>{description}</p>
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
