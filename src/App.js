import React, { Component } from "react";
import Clock from "./components/Clock";
import "./App.css";

class App extends Component {
  state = {
    countrydata: [
      {
        id: 1,
        timezone: "UTC-0",
        city: "London",
        offset: 0,
        color: "greenyellow"
      },
      {
        id: 2,
        timezone: "UTC-13",
        city: "Auckland",
        offset: 13,
        color: "lightblue"
      },
      {
        id: 3,
        timezone: "UTC-6",
        city: "Edmonton",
        offset: 6,
        color: "OrangeRed"
      },
      {
        id: 4,
        timezone: "UTC-3",
        city: "Buenos Aires",
        offset: 3,
        color: "pink"
      },
      {
        id: 5,
        timezone: "UTC-2",
        city: "Cape Town",
        offset: 2,
        color: "orange"
      },
      {
        id: 6,
        timezone: "UTC-7",
        city: "Los Angeles",
        offset: 7,
        color: "green"
      },
      {
        id: 7,
        timezone: "UTC-5.3",
        city: "Mumbai",
        offset: 5.3,
        color: "yellow"
      },
      {
        id: 8,
        timezone: "UTC-8",
        city: "Perth",
        offset: 8,
        color: "Wheat"
      },
      {
        id: 9,
        timezone: "UTC-1",
        city: "Vienna",
        offset: 1,
        color: "PowderBlue"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.countrydata.map(dataline => (
            <div className="outerbox">
              <div className="box" id="theleftcontent">
                <div className="hoverbox">
                  <div id="title" style={{ color: dataline.color }}>
                    {dataline.city}
                  </div>

                  <Clock
                    key={dataline.id}
                    timezone={dataline.timezone}
                    city={dataline.city}
                    offset={dataline.offset}
                    color={dataline.color}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
