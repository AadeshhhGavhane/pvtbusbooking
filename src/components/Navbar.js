import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bus Booking
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li classclassName="nav-item">
                <a classclassName="nav-link" href="#">
                  Home
                </a>
              </li>
              <li classclassName="nav-item">
                <a classclassName="nav-link" href="#">
                  About
                </a>
              </li>
              <li classclassName="nav-item">
                <a classclassName="nav-link" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container"></div>
    </>
  );
}
