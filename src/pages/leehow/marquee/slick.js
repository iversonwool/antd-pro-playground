import React, { Component } from "react";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";
import {getRandomColor} from './marquee'
import styles from './index.less'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10,
      cssEase: "linear",
    };
    return (
      <div className={styles.c}>
        <h2>Auto Play</h2>
        <Slider {...settings} vertical arrows={false} >
          {/* <div>
            <h3 style={{background: getRandomColor()}}>1</h3>
          </div>
          <div style={{height: 30,width: 100}}>
            <h3 style={{background: getRandomColor()}}>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
          {[1, 2, 3, 4, 5, 6].map(e => (
            <div key={e}>
              <div style={{width: 100, height: 30, background: getRandomColor()}}>{e}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}