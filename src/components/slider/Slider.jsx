import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import axios
 from 'axios';
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { checkFinalSound } from '../../lib/checkFinalSound';

export default class SimpleSlider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        achieve: 0,
        name: "",
        balance: 0,
        isCreated: ""
      };
    }
  
    componentDidMount() {
        const kidUserId = this.props.selectedChildId;
        console.log(kidUserId);
        this.getUser(kidUserId);
    }
  
    getUser = (userId) => {
      axios
        .get(`http://localhost:8080/api/v1/users/${userId}`)
        .then((response) => {
          const achieve = response.data.data.achieve;
          const name = response.data.data.name;
          const balance = response.data.data.balance;
          const isCreated = response.data.data.createAt;
          this.setState({ achieve, name, balance, isCreated });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    componentDidUpdate(prevProps) {
        if (prevProps.selectedChildName !== this.props.selectedChildName) {
          const kidUserId = this.props.selectedChildId;
          this.getUser(kidUserId);
        }
      }
  
    render() {
        const { achieve, name, balance, isCreated } = this.state;
        const getEnding1 = (text) => {
            const lastTwoChars = text.slice(-2); 
            if(checkFinalSound(text)) return `${lastTwoChars}가`;
            else return `${lastTwoChars}이가`;
        };

        const getEnding2 = (text) => {
            const lastTwoChars = text.slice(-2); 
            if(checkFinalSound(text)) return `${lastTwoChars}의`;
            else return `${lastTwoChars}이의`;
        };
        
        const checkLevel = (num) => {
            var mapNum = Math.ceil(num / 7);
            var missionNum = num % 8;
            return `${mapNum}-${missionNum}` 
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            cssEase: "linear"
        };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='slide-item'>
                    <div style={{display: "flex"}}> 
                        <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/stackmoney.png`} alt="" />
                        <p> {getEnding1(name)} 현재 완료한 미션 개수 : {achieve}개 🐳</p>
                    </div>
                </div>
                <div className='slide-item'>
                    <div style={{display: "flex"}}> 
                        <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/horse.png`} alt="" />
                        <p> {getEnding2(name)} 현재 잔액 : {balance}원 🐳</p>
                    </div>
                </div>
                <div className='slide-item'>
                    <div style={{display: "flex"}}> 
                        <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/stackmoney.png`} alt="" />
                        <p> {getEnding2(name)} 현재 미션 레벨 : {checkLevel(achieve)} 🐳</p>
                    </div>
                </div>
                <div className='slide-item'>
                    <div style={{display: "flex"}}> 
                        <img className='slider-img' src={`${process.env.PUBLIC_URL}/assets/images/stackmoney.png`} alt="" />
                        <p> {getEnding1(name)} 경제 여행을 떠난지 {isCreated}일 🦋</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
}
