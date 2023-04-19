import React, { Component } from 'react';
import Info from './Components/Info';
import Note from './Components/Note';
import './App.css'
import Modal from './Components/Modal';

class App extends Component {
  state={
    note:{
    firstname:'',
    lastname:'',
    phone:'',
    role:'',
    message:''
    },
    button:false
  }
  handleInputValue = (e) => {
    const name = e.target.name;
    this.setState({note: {...this.state.note, [name]:
      e.target.value}})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({button : 
      !this.state.button})
      e.target.reset();     
    };

  handleModal = (e) => {
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
      {...this.state.note}
      ></Note>
      </div>
    </div>
    {
      this.state.button && 
    <Modal
    {...this.state.note}
    handleModal={this.handleModal}
    ></Modal>
    }
      </div>
    );
  }
}

export default App;

