import React, { Component } from "react";
import "./Slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }

  render() {
    return (
      <section className="Slider">
        <></>
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
      className: (backButton.props.className ?? "") + " Slider-back",
    });
  }

  nextButton() {
    const { nextButton } = this.props;
    return React.cloneElement(nextButton, {
      onClick: this.getNextSlide,
      disabled: !this.hasNext(),
      className: (nextButton.props.className ?? "") + " Slider-next",
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
  nextButton: (
    <button title="Next">
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  ),
  backButton: (
    <button title="Back">
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  ),
};
