import React, { Component } from "react";

class Navbar extends Component {
  render(){
    return(
      <div>
      <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Spotify</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="collapsible.html">Cerrar sesion</a></li>
              </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Navbar;
