import React, { Component } from "react";
import Arrow from "./Arrow.js";
import "./Slider.scss";

export default class Slider extends Component {
  constructor(props) {
    console.log("props   @", props);
    super(props);
    this.state = {
      activeIndex: 1,
      left: 0,
      slider: [
        "http://www.shopatkerala.com/uploads/client_banner/home_page_banner1.jpg",

        "https://storage.sg.content-cdn.io/in-resources/479f9d71-0a21-4015-aac2-ef0b75d4cc3e/Images/userimages/banners/new_arrivals_21july.jpg",
        "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
      ],
    };
    console.log("props   @@@@@", props);
  }

  prevSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400, // this.props.sliderWidth not working for some reason
    });
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left:
          this.state.left -
          this.props.sliderWidth * (this.state.slider.length - 1),
      });
    }
  };

  nextSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth,
    });
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0,
      });
    }
  };

  clickIndicator = (e) => {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left:
        this.props.sliderWidth -
        parseInt(e.target.textContent) * this.props.sliderWidth,
    });
  };
  render() {
    var mystyle = {
      width: "1500px",
      height: "750px",
      left: this.state.left,
    };
    return (
      <div>
        <div className="homeslider-wrapper">
          <ul className="slider">
            {this.state.slider.map(function (item, index) {
              return (
                <li
                  style={mystyle}
                  className={
                    index + 1 === this.state.activeIndex
                      ? "slider-item-homepage"
                      : "hide"
                  }
                >
                  <img src={item} alt="" className="image" width="100%" />
                </li>
              );
            }, this)}
          </ul>
        </div>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </div>
    );
  }
}
