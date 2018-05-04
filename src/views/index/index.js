import React, { Component } from "react";
import "./index.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import SongItem from "./songitem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkSignIn, search, player } from "./../../actions";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ""
    };
    this.buscar = this.buscar.bind(this);
    this.getResultsCard = this.getResultsCard.bind(this);
  }

  componentWillMount() {
    this.props.checkSignIn();
  }

  getResultsCard() {
    const songs = this.props;

    if (songs.length > 0) {
      return (
        <div className="card">
          <div className="card-content">{console.log("hola mundo")}</div>
        </div>
      );
    }
  }

  buscar(event) {
    event.preventDefault();
    this.props.search(this.state.song);
  }

  render() {
    const { song } = this.state;
    console.log(this.props.songs);
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
        {this.getResultsCard()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    routes: state.routes,
    songs: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkSignIn, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
