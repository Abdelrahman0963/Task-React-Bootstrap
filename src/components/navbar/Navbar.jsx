import React from "react";

export default function Navbar() {
  function navbarOpen() {
    let nav = document.querySelector(".collapse");
    nav.classList.add("show");
  }
  function navbarClose() {
    let nav = document.querySelector(".collapse");
    nav.classList.remove("show");
  }
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light p-3">
          <div className="container-fluid flex-nowrap position-relative">
            <a
              className="navbar-brand text-white fs-md-2 text-uppercase "
              href="#"
            >
              Strategy
            </a>
            <div className="listAndBtn">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={navbarOpen}
              >
                <span className="navbar-icon"></span>
                <span className="navbar-icon"></span>
                <span className="navbar-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center "
                id="navbarNavDropdown"
              >
                <div className="navbar-iconClose" onClick={navbarClose}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="30px"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                  </svg>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Team
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-icon"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="16px"
                        width="16px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                      </svg>
                    </span>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <button className="btn-about">Get Started</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
