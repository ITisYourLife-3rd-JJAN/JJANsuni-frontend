import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import '../components/introPage/intro.css';
import LoginButton from "../components/introPage/loginButton/LoginButton";
import RegisterButton from "../components/introPage/registerButton/RegisterButton";
const anchors = ["1", "2", "3","4"];

const Intro = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section" id="section1"><img id="pig" src={`${process.env.PUBLIC_URL}/assets/images/fullpage/realpig.png`} alt=""/><div id="hand"><img src={`${process.env.PUBLIC_URL}/assets/images/fullpage/hand.png`} alt=""/></div><LoginButton/></div>
          <div className="section" id="section2"><div><img id="cardphone" src={`${process.env.PUBLIC_URL}/assets/images/fullpage/cardPhone.png`} alt=""/></div></div>
          <div className="section" id="section3">
            <div className="coins">
              <img className="jjan" src={`${process.env.PUBLIC_URL}/assets/images/fullpage/jjancoin.png`} alt=""></img>
              <img className="jcoin" src={`${process.env.PUBLIC_URL}/assets/images/fullpage/jcoin.png`} alt=""></img>
            </div></div>
          <div className="section" id="section4"><RegisterButton/></div>
        </div>
      );
    }}
  />
);
export default Intro;
