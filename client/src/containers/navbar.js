import React, { Component } from 'react'
import './navbar.css'

export default class navbar extends Component {
  render() {
    return (
    <nav className="navbar_container">
      <div className="navbar">
        <div className="home_btn">DMCC</div>
        <ul className="class">
          <li><a href="about">About</a></li>
          <li><a>租借規定</a></li>
          <li><a>器材列表</a></li>
          <li><a>Contact</a></li>
        </ul>
        <div className="SignIn"></div>
      </div>
    </nav>
    )
  }
}
