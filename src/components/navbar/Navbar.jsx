import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
                  <RiCloseLine />
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
                      <MdOutlineKeyboardArrowDown />
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
