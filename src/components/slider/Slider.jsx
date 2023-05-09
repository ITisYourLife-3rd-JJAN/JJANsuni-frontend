import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1300,
            cssEase: 'liner'
          };

      return (
        <div className="slider-container">
           <Slider {...settings}>
                <div className='slide-item'>
                    <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/stackmoney.png`} alt="" />
                    <p>내 현재 잔액 : 88,000원</p>
                </div>
                <div className='slide-item'>
                    <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/horse.png`} alt="" />
                    <p>이번주 푼 문제 : 6문제 / 7문제</p>
                </div>
                <div className='slide-item'>
                    <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/stackmoney.png`} alt="" />
                    <p>내 현재 잔액 : 88,000원</p>
                </div>
            </Slider>
        </div>
      );
    }
  }
