import React, { Component } from 'react'
import './App.css'
import Main from './containers/main';
import Menu from './containers/navbar';
import About from './containers/about';
import Rule from './containers/rule';
import Position from './containers/position'
import { BrowserRouter} from 'react-router-dom'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      rentObject:[
    ],
      objects:[],
      classes:[],
      classNow:0,
      }
    }
    componentDidMount(){
      fetch('http://localhost:5000/api/classes')
      .then(res => res.json())
      .then(classes => this.setState({classes}, ()=>{console.log(classes)}));
      fetch('/api/objects')
      .then(res => res.json())
      .then(objects => this.setState({objects}, ()=>{console.log('Objects fetched...')}));
    }
  
  changeClass = (i)=>{this.setState({classNow: i})}

  rent = (id)=>{ this.state.objects.map((object)=>{
    if(object.id === id){
      // this.setState(()=>{object.rent = !(object.rent);console.log(this.state)});
      this.setState(()=>{
        // object.rent = !(object.rent);
        if(this.state.rentObject.some((rentObj)=>rentObj.id===id)){
            const arr = this.state.rentObject.filter((rentObj)=>rentObj.id!==id);
            this.state.rentObject = arr
            console.log(this.state)
        }else{
          this.state.rentObject.push(object);
          console.log(this.state);
        };
      });
      this.setState(()=>object.rent = !(object.rent));
    };
  })
}
  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <div className="card" id="menu"><Menu /></div>
        <div className="card" id="about"><About /></div>
        <div className="card" id="rule"><Rule /></div>
        <div className="card" id="main"><Main changeClass={this.changeClass} state={this.state} onclick={this.rent}/></div>
        <div className="card" id="position"><Position rentObj={this.state.rentObject}/></div>
      </div>
    </BrowserRouter>
    )
  }
}
