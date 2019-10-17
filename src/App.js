import React from "react";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="outerbox">
          <div className="box" id="theleftcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                London
              </div>
              <Clock timezone={"UTC-0"} city={"London"} offset={"0"} />
            </div>
          </div>
        </div>
        <div className="outerbox">
          <div className="box" id="therightcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                Auckland
              </div>
              <Clock timezone={"UTC-13"} city={"Auckland"} offset={"13"} />
            </div>
          </div>
        </div>
        <div className="outerbox">
          <div className="box" id="therightcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                Edmonton
              </div>
              <Clock timezone={"UTC-6"} city={"Edmonton"} offset={"6"} />
            </div>
          </div>
        </div>
        <div className="outerbox">
          <div className="box" id="therightcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                Buenos Aires
              </div>
              <Clock timezone={"UTC-3"} city={"Buenos Aires"} offset={"3"} />
            </div>
          </div>
        </div>
        <div className="outerbox">
          <div className="box" id="therightcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                Cape Town
              </div>
              <Clock timezone={"UTC-2"} city={"Cape Town"} offset={"2"} />
            </div>
          </div>
        </div>
        <div className="outerbox">
          <div className="box" id="therightcontent">
            <div className="hoverbox">
              <div className="innerbox" id="title">
                Los Angeles
              </div>
              <Clock timezone={"UTC-7"} city={"Los Angeles"} offset={"-7"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
