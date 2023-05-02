import React, { Component } from 'react';
import Info from './Components/Info';
import Note from './Components/Note';
import './App.css'
import Modal from './Components/Modal';
import Posts from './Components/Posts';
import axios from 'axios';

class App extends Component {

  state={

    note:{
    firstname:'',
    lastname:'',
    phone:'',
    role:'',
    message:''
    },
    button:false,
    data: []
  }
  componentDidMount(){
    fetch('http://localhost:4001/note')
    .then(res => res.json())
    .then(data => this.setState({data: data}))
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

  handleModal = (action) => {
    if (action === 'yes'){
        // Send data to the backend via POST
        axios.post("http://localhost:4001/note", this.state.note)
        .then(res => {
          axios.get('http://localhost:4001/note').then(response => this.setState({data: response.data}))
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({button : 
          !this.state.button}); 
    } else {
      this.setState({button : 
        !this.state.button}); 
    }
           
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

    { this.state.data !== [] &&
      this.state.data.map(item => <Posts
        key={item.id}
        note = {item}
        ></Posts>)
    }
      </div>
    );
  }
}

export default App;

