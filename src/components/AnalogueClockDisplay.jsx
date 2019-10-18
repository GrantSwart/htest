import React, { Component } from "react";

class AnalogueClockDisplay extends Component {
  position() {}

  render() {
    //get hour, minute, seconds for clock
    let hr = this.props.newdate.getHours();
    let min = this.props.newdate.getMinutes();
    let sec = this.props.newdate.getSeconds();

    //set position on clock for each time component
    var hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;
    let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
    let secPosition = (sec * 360) / 60;

    //console.log("H " + hrPosition);
    //console.log("M " + minPosition);
    //console.log("S " + secPosition);

    // HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    // MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    var hoursTransform = "rotate(" + hrPosition + "deg)";
    //console.log("hours" + hoursTransform);
    var hoursCss = {
      transform: hoursTransform
    };

    // MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    var minutesTransform = "rotate(" + minPosition + "deg)";
    var minutesCss = {
      transform: minutesTransform
    };

    //SECONDHAND INLINE CSS style={secondsCss)
    //SECONDHAND.style.transform = "rotate(" + props.sec + "deg)";
    //TEST IN RETURN <h2>{props.sec}</h2>
    var secondsTransform = "rotate(" + secPosition + "deg)";
    var secondsCss = {
      transform: secondsTransform
    };

    return (
      <div className="clockbox">
        {/* <h3>{props.hrs} + : + {props.mins} + : + {props.secs}</h3> */}
        <svg
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 600 600"
        >
          {/*Definitions for Glow*/}
          <defs>
            <filter
              id="red-glow"
              filterUnits="userSpaceOnUse"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              {/*<!-- blur the text at different levels-->*/}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur5"
              />
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur10"
              />
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="20"
                result="blur20"
              />
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="30"
                result="blur30"
              />
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="50"
                result="blur50"
              />
              {/*<!-- merge all the blurs except for the first one -->*/}
              <feMerge result="blur-merged">
                <feMergeNode in="blur10" />
                <feMergeNode in="blur20" />
                <feMergeNode in="blur30" />
                <feMergeNode in="blur50" />
              </feMerge>
              {/*<!-- recolour the merged blurs red-->*/}
              <feColorMatrix
                result="red-blur"
                in="blur-merged"
                type="matrix"
                values="1 0 0 0 0
                       -0.2 1.0 0.3 0.1 0
                       -0.1 0 1 0 0
                       0 0 0 1 0"
              />
              <feMerge>
                <feMergeNode in="red-blur" />{" "}
                {/* <!-- largest blurs coloured red -->*/}
                <feMergeNode in="blur5" />{" "}
                {/*<!-- smallest blur left white -->*/}
                <feMergeNode in="SourceGraphic" />{" "}
                {/* <!-- original white text -->*/}
              </feMerge>
            </filter>
          </defs>
          {/*SVG Clock Face*/}

          <g id="face">
            <circle
              style={{ stroke: this.props.color }}
              className="circle"
              cx="300"
              cy="300"
              r="253.9"
            />
            <path
              style={{ stroke: this.props.color }}
              className="hour-marks"
              d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
            />
            <circle
              style={{ stroke: this.props.color }}
              className="mid-circle"
              cx="300"
              cy="300"
              r="5.2"
            />
          </g>
          {/* Target the inline style and update */}
          <g id="hour" style={hoursCss}>
            <path
              style={{ stroke: this.props.color }}
              className="hour-arm"
              d="M300.5 298V142"
            />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          {/* Target the inline style and update */}
          <g id="minute" style={minutesCss}>
            <path
              style={{ stroke: this.props.color }}
              className="minute-arm"
              d="M300.5 298V67"
            />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          {/* Target the inline style and update */}
          <g id="second" style={secondsCss}>
            <path
              style={{ stroke: this.props.color }}
              className="second-arm"
              d="M300.5 350V55"
            />
            <circle className="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
        </svg>
      </div>
    );
  }
}

export default AnalogueClockDisplay;
