import "./Preview.css";
import { Component } from "react";
import ReactToPrint from "react-to-print";
import PreviewCV from "../PreviewCV/PreviewCV";
import PreviewControls from "../PreviewControls/PreviewControls";

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExperience: true,
      showEducation: true,
      showSkills: true,
      showProjects: true,
    };
  }

  handleInput = (e) => this.setState({ [e.target.name]: e.target.checked });

  render() {
    return (
      <div>
        <PreviewControls
          controls={this.state}
          handler={this.handleInput}
          className="cls"
        />

        <button className="print-btn">
          <ReactToPrint
            trigger={() => {
              return <i className="fa-solid fa-print" title="Print CV"></i>;
            }}
            content={() => this.componentRef}
          />
        </button>

        <PreviewCV
          info={this.props.info}
          controls={this.state}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}
