import React, { Component } from "react";
import "./index.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import SongItem from "./songitem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkSignIn, search } from "./../../actions";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ""
    };
    this.buscar = this.buscar.bind(this);
  }

  componentWillMount() {
    this.props.checkSignIn();
  }

  buscar(event) {
    event.preventDefault();
    this.props.search(this.state.song);
  }

  render() {
    const { song } = this.state;
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
                  //console.log(song);
                }}
                value={song}
              />
              <a
                href=""
                className="waves-effect waves-light btn"
                onClick={this.buscar}
              >
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

function mapStateToProps(state) {
  console.log(state);
  return {
    routes: state.routes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkSignIn, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
