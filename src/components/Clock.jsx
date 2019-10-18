import React, { Component } from "react";
import AnalogueClock from "./AnalogueClock";
import DigitalTime from "./DigitalTime";

class Clock extends Component {
  constructor(props) {
    super(props);
    //initialise state
    this.state = {
      date: new Date()
    };

    var utc2 =
      this.state.date.getTime() + this.state.date.getTimezoneOffset() * 60000;
    console.log("utc=" + utc2);
    var countrytime = utc2 + 3600000 * this.props.toffset;
    console.log("countrytime=" + countrytime);
  }

  //Lifecycle method
  //runs AFTER the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Lifecycle method
  //tear down the timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Lifecycle method
  //the clock component runs every second
  //uses this.setState() to schedule updates to the components local state
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    // const ct1 = this.state.date;

    //this is the UI that is returned
    return (
      <React.Fragment>
        {/* display analogue clock face pass in offset and city based on country */}
        <React.Fragment>
          <AnalogueClock
            thedate={this.state.date}
            tcity={this.props.city}
            toffset={this.props.offset}
            color={this.props.color}
          />
        </React.Fragment>
        {/* <h1>Hello, {this.props.timezone}</h1> */}

        {/* Call CalcTime component and pass in city and offset values based on country */}
        <h2 style={{ color: this.props.color }}>
          <DigitalTime
            thedate={this.state.date}
            tcity={this.props.city}
            toffset={this.props.offset}
          />
        </h2>

        <h2 style={{ color: this.props.color }}>TZ: {this.props.timezone}</h2>
      </React.Fragment>
    );
  }
}

export default Clock;
