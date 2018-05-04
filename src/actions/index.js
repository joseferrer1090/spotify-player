import axios from "axios";
import { TrackHandler, Client, PlaylistHandler } from "spotify-sdk";

//redirect_uri: "http://localhost:3000/"
//redirect_uri "url que me arroje el ngrok"

let client = Client.instance;
client.settings = {
  clientId: "44147de43d4b40159688fd0a33966bf0",
  secretId: "8c85a2616c024f639d6ae45448cf7e29",
  scopes: [
    "user-follow-modify user-follow-read user-library-read user-top-read"
  ],
  redirect_uri: "https://9f41cf2c.ngrok.io"
};

export const checkSignIn = () => {
  return (dispatch, getState) => {
    if (sessionStorage.token) {
      client.token = sessionStorage.token;
    } else if (window.location.hash.split("&")[0].split("=")[1]) {
      sessionStorage.token = window.location.hash.split("&")[0].split("=")[1];
      client.token = sessionStorage.token;
    } else {
      client.login().then(url => {
        window.location.href = url;
      });
    }
  };
};

const startFetch = () => {
  return { type: "IS_FETCHING", isFetching: true };
};
const errorFetch = err => {
  return { type: "ERROR_FETCH", isFetching: false, err };
};
const completeFetch = data => {
  return { type: "COMPLETE_FETCH", isFetching: false, payload: data };
};

export const search = trackName => {
  return (dispatch, getState) => {
    dispatch(startFetch());
    let track = new TrackHandler();
    track
      .search(trackName, { limit: 5 })
      .then(trackCollection => {
        dispatch(completeFetch(trackCollection));
        //console.log(trackCollection);
      })
      .catch(err => {
        dispatch(errorFetch(err));
      });
  };
};
