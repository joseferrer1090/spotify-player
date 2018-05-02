import React, { Component } from "react";
import "./index.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import SongItem from "./songitem";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ""
    };
  }
  render() {
    return (
      <div className="Index">
        <div className="card">
          <div className="card-content">
            <div className="Index-searchBox">
              <input
                type="text"
                placeholder="Cancion"
                onChange={e => {
                  this.setState({
                    song: e.target.value
                  });
                  //console.log(this.state.song);
                }}
                value={this.state.song}
              />
              <a href="" className="waves-effect waves-light btn">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
        </div>
        <div className=" card Index-results-card">
          <div className="card-content">
            <SongItem />
          </div>
          {/* TODO */}
        </div>
      </div>
    );
  }
}

export default Index;
