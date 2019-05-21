import React, { Component } from 'react'
import './about.css'
import Img from './img/BG1.png'

export default class about extends Component {
  render() {
    return (
      <div className="about_container">
        <div className="about_Img_shadow" ><img className="about_Img" src={Img}></img></div>
        <h3>器材租借</h3>
        <div className="about_text">
            <p>在這裡你可以看到本社的所有器材</p>
            <p>包括簡易的使用說明與是否可借</p>
            <p>如果有任何問題歡迎聯絡我們</p>
        </div>
      </div>
    )
  }
}
