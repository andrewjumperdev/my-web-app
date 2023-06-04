import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container px-5">
        <Link class="navbar-brand"  to="/">
          <span class="fw-bolder text-primary">Andrew</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
