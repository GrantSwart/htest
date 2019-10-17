import React, { Component } from "react";

class DigitalTime extends Component {
  render() {
    //Component
    var d = this.props.thedate;
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * this.props.toffset);
    return (
      <div>
        {this.props.tcity} {nd.toLocaleString()}
      </div>
    );
  }
}

export default DigitalTime;
