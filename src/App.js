import React, { Component } from 'react';
import Info from './Components/Info';
import Note from './Components/Note';
import './App.css'
import Modal from './Components/Modal';

class App extends Component {
  state={
    firstname:'',
    lastname:'',
    phone:'',
    role:'',
    message:'',
    button:false
  }
  handleInputValue = (e) => {
    const name = e.target.name;
    this.setState({[name] : 
      e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({button : 
      !this.state.button})
  };

  render() {
    return (
      <div>
        <div className="container">
      <div className='info'>
      <Info 
      handleInputValue={this.handleInputValue}
      handleSubmit={this.handleSubmit}
      ></Info>
      </div>
      <div className='note'>
      <Note 
      firstname={this.state.firstname}
      lastname={this.state.lastname}
      phone={this.state.phone}
      role={this.state.role}
      message={this.state.message}
      ></Note>
      </div>
    </div>
    {
      this.state.button && 
    <Modal
    firstname={this.state.firstname}
    lastname={this.state.lastname}
    phone={this.state.phone}
    role={this.state.role}
    message={this.state.message}
    handleSubmit={this.handleSubmit}
    ></Modal>
    }
      </div>
    );
  }
}

export default App;

