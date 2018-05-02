import React, { Component } from "react";
import PropTypes from "prop-types";

class SongItem extends Component {
  render() {
    return (
      <div>
        <p> SongItem </p>
      </div>
    );
  }
}

SongItem.propTypes = {
  songId: PropTypes.string,
  tokenPath: PropTypes.string,
  albunPhoto: PropTypes.string,
  songName: PropTypes.string,
  artistName: PropTypes.string
};

export default SongItem;
