import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link h3">
              ToDo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link h3">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
