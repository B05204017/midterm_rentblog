import React, { Component } from 'react'
import './position.css'
import Img from './img/map.png'

export default class position extends Component {
    componentDidMount(){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        document.getElementById('submit').addEventListener('click', (e)=>{
            if(name.trim() || email.trim() !== ''){
                fetch('./api/rent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain'},
                    body: JSON.stringify({
                        name: name.value,
                        email: email.valuse,
                        rentObj: this.props.rentObj
                    })
                })
            }
        });
    }
  render() {
    return (
      <div className="position_container">
        <div className="position_form">
                <h3>Your Name</h3>
                <input id="name" type="text"></input>
                <h3>Your Email</h3>
                <input id="email" type="email"></input>
                <div className="rent_objects">
                    {this.props.rentObj.map((object=>{
                        return <div key={object.id} className="rent_item">
                                    <div className="rent_item_imgBx">
                                        <img src="http://unsplash.it/300/400"></img>
                                    </div>
                                    <div className="rent_item_content">
                                        <h3>{object.name}</h3>
                                        <p>{object.detail}</p>
                                    </div>
                                </div>
                    }))
                    }
                </div>
                <input id="submit" type="submit" name="" value="submit"></input>
        </div>
        <div className="position_footer">
        <div className="position_img"><img src={Img}></img></div>
            <ul className="map">
                <li><b>第一活動中心</b></li>
                <li>地址：10617台北市大安區羅斯福路四段1號</li>
                <li>電話：02-33663247~50</li>
                <li>傳真：02-23661797</li>
            </ul>
            <ul>
                <li><b>社辦位置</b></li>
                <li>第一活動中心230</li>
                <li>與國術社同間</li>
            </ul>
            <ul>
                <li><b>社課地點</b></li>
                <li>電機博理館112</li>
            </ul>
            <ul>
                <li><b>Facebook：</b></li>
                <li><a target="_blank" href="https://www.facebook.com/NTUDMCC/?ref=bookmarks">DMCC|台大數位影片創作社</a></li>
            </ul>
        </div>
      </div>
    )
  }
}
