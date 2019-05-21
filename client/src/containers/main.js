import React, { Component } from 'react'
import './main.css'
export default class main extends Component {

  render() {
    const rentStyle={
      opacity:0.5,
    };
    return (
      <div className="main_container">
        <div className="main_sidebar">
          <ul>
            <li onClick={() => this.props.changeClass(0)}>腳架</li>
            <li onClick={() => this.props.changeClass(1)}>燈光</li>
            <li onClick={() => this.props.changeClass(2)}>聲音</li>
            <li onClick={() => this.props.changeClass(3)}>其他</li>
          </ul>
        </div>
        <div className="main_class">
            <ul className="main_list">
                {this.props.state.objects.map((object)=> {
                    if(object.class === this.props.state.classes[this.props.state.classNow].name){
                        return <div key={object.id} className="main_item" style={object.rent?rentStyle:{}} onClick={()=>this.props.onclick(object.id)}>
                                  <div className="main_item_imgBx">
                                    <img src="http://unsplash.it/300/400"></img>
                                  </div>
                                  <div className="main_item_content">
                                    <h3>{object.name}</h3>
                                      <p>{object.detail}</p>
                                  </div>
                               </div>
                    }
                })}
            </ul>
        </div>
      </div>
    )
  }
}
