import React from 'react';
import './Modal.css'

const Modal = ({firstname, lastname, phone, role, message, handleSubmit}) => {
    return (
        <div className="modal-overlay">
      <div className="modal-content">
      <div className='modal'>
          <h2>This is your note: </h2>
          <p>Firstname: {firstname}</p>
          <p>Lastname: {lastname}</p>
          <p>Phone: {phone}</p>
          <p>Role: {role}</p>
          <p>Message: {message}</p>
          <button onClick={handleSubmit}>YES, I AM SURE</button>
          <button onClick={handleSubmit}>NO, I DON'T WANT TO POST IT</button>
        </div>

      </div>
    </div>
    );
};

export default Modal;