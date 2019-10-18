import React, { Component } from "react";
import AnalogueClockDisplay from "./AnalogueClockDisplay";

class AnalogueClock extends Component {
  render() {
    //CALL Analogue clock Display and pass in the updated hr, min, sec positions
    var d = this.props.thedate;
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var newdate = new Date(utc + 3600000 * this.props.toffset);

    return (
      <React.Fragment>
        {/* <h3>{hr} + : + {min} + : + {sec}</h3> */}

        <AnalogueClockDisplay newdate={newdate} color={this.props.color} />
      </React.Fragment>
    );
  }
}

export default AnalogueClock;
