import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Name extends Component{
  render(){
    const name=this.props.name;

    return(
      <span style={{color: 'red'}}>{name}</span>

    );
  }
}





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    var style={
      position: "absolute",
      color: "red",
      fontSize: "100px",
      top: "50%",
      left: "10%"
    }
    const name = this.state.name;

    return (
      <div>
      <h1>Hello, <Name name={name}/>.</h1>
      <h1>Hello,Hello</h1>

      <input
      type="text"
      value={name}
      onChange={ e=> {
        this.setState({
          name: e.target.value
        })
      }}
      />
      <button class="mdl-button mdl-js-button mdl-button--raised" onClick={this.send.bind(this)}>ペットボトルを開ける</button>
      <div style={style}>{this.state.message}</div>
      </div>

    );
  }
}

export default App;
