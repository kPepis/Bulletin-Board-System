import React, { Component } from "react";
import Anime from "react-anime";

export default class Root extends Component {
  render() {
    return (
      <Anime
        easing="easeOutElastic"
        duration={1000}
        // direction="alternate"
        // loop={true}
        delay={(el, index) => index! * 200}
        // translateX="13rem"
        scale={[0.75, 0.9]}
      >
        {/* <div> */}
        <div className="blue">
          <p>dasd</p>
          <p>Djksakjadsk</p>
          <div>
            <p>lelelel</p>
          </div>
        </div>
        <div className="lol">Lalalala</div>
        <div className="123">Lalalala</div>
        {/* </div> */}
      </Anime>
    );
  }
}
