import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export class HeaderItem extends Component {

    headerStyle = () => {
        return {
            backgroundColor: '#333',
            color: '#20B2AA',
            align: 'center',
            fontSize: '2rem',
            textAlign: 'center',
            padding: '10px' 
        }
    }
    render() {
        return (
          <div style={this.headerStyle()}>
            <h3 style={this.headerStyle()}>Todo List</h3>
            <Link style={linkStyle} to="/">
              Home
            </Link>{" "}
            |{" "}
            <Link style={linkStyle} to="/about">
              About
            </Link>
          </div>
        );
    }
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: '1.2rem',
};

export default HeaderItem
