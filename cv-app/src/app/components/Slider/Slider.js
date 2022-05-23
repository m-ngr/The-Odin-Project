import React, { Component } from "react";
import "./Slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }

  render() {
    return (
      <section>
        {this.getCurrentSlide()}
        {this.backButton()}
        {this.nextButton()}
      </section>
    );
  }

  backButton() {
    const { backButton } = this.props;
    return React.cloneElement(backButton, {
      onClick: this.getPreviousSlide,
      disabled: !this.hasPrevious(),
    });
  }

  nextButton() {
    const { nextButton } = this.props;
    return React.cloneElement(nextButton, {
      onClick: this.getNextSlide,
      disabled: !this.hasNext(),
      // className: nextButton.props.className + " hello",
    });
  }

  getCurrentSlide() {
    const { children } = this.props;
    if (!children) return this.defaultSlide();
    if (Array.isArray(children)) return children[this.state.currentSlide];
    return children;
  }

  defaultSlide() {
    return <div> no slides to view </div>;
  }

  getNextSlide = () => {
    if (this.hasNext()) {
      this.setState((state) => ({ currentSlide: state.currentSlide + 1 }));
    }
  };

  getPreviousSlide = () => {
    if (this.hasPrevious()) {
      this.setState((state) => ({ currentSlide: state.currentSlide - 1 }));
    }
  };

  hasNext() {
    if (Array.isArray(this.props.children) === false) return false;
    return this.state.currentSlide < this.props.children.length - 1;
  }

  hasPrevious() {
    if (Array.isArray(this.props.children) === false) return false;
    return this.state.currentSlide > 0;
  }
}

Slider.defaultProps = {
  nextButton: <button>Next</button>,
  backButton: <button>Back</button>,
};
