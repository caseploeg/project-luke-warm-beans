import React from "react";
import { Link } from "react-router-dom";

function TopBar(props) {

    const loggedIn = props.loggedIn;
    const user = props.user;

    if (loggedIn && user.roles){
      if (user.roles.student) {
        return (
          <div aria-label="topBar">
            <Link to="/logout">
              <button className="navbarButton">LOGOUT</button>
            </Link>
            <img id="logo" src={require('../images/logo.svg')} alt="Logo"/>
            <nav className="navbar">
              <ul>
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="navItem">
                  <Link to="/dashboard">Student</Link>
                </li>
                <li className="navItem">
                  <Link to="/courses">Courses</Link>
                </li>
              </ul>
            </nav>
          </div>
        );

      } else if (user.roles.instructor) {
        return (
          <div aria-label="topBar">
            <Link to="/logout">
              <button className="navbarButton">LOGOUT</button>
            </Link>
            <img id="logo" src={require('../images/logo.svg')} alt="Logo"/>
            <nav className="navbar">
              <ul>
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="navItem">
                  <Link to="/create">Instructor</Link>
                </li>
                <li className="navItem">
                  <Link to="/courses">Courses</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      } else if (user.roles.organization) {
        return (
          <div aria-label="topBar">
            <Link to="/logout">
              <button className="navbarButton">LOGOUT</button>
            </Link>
            <img id="logo" src={require('../images/logo.svg')} alt="Logo"/>
            <nav className="navbar">
              <ul>
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="navItem">
                  <Link to="/jobs">Social Initiative</Link>
                </li>
                <li className="navItem">
                  <Link to="/courses">Courses</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      } else {
        return (
          <div aria-label="topBar">
            <Link to="/logout">
              <button className="navbarButton">LOGOUT</button>
            </Link>
            <img id="logo" src={require('../images/logo.svg')} alt="Logo"/>
            <nav className="navbar">
              <ul>
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/about">About</Link>
                </li>
                <li className="navItem">
                  <Link to="/create">Instructor</Link>
                </li>
                <li className="navItem">
                  <Link to="/jobs">Social Initiative</Link>
                </li>
                <li className="navItem">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="navItem">
                  <Link to="/dashboard">Student</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      }
    } else {
        return (
          <div aria-label="topBar">
            <Link to="/login">
              <button className="navbarButton">LOGIN</button>
            </Link>
            <Link to="/SignUp">
              <button className="navbarButton" id="navbarSignUpButton">SIGN UP</button>
            </Link>
            <img id="logo" src={require('../images/logo.svg')} alt="Logo"/>
            <nav className="navbar">
              <ul>
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
    }

}

export default TopBar;