import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">{this.props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">{this.props.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">{this.props.news}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">{this.props.contact}</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">{this.props.about}</Link>
                </li>

              </ul>
              
            </div>
          </div>
        </nav>

      </>
    )
  }
}

export default Navbar


Navbar.defaultProps = {
  title: "NewsApp",
  home: "Home",
  news:"AllNews",
  contact:"Contact Us",
  about:"About Us"


}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  home:PropTypes.string.isRequired,
  news:PropTypes.string.isRequired,
  contact:PropTypes.number.isRequired,
  about:PropTypes.string.isRequired
};