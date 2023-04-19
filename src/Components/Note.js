import React from 'react';
import './Note.css'

const Note = ({firstname, lastname, phone, role, message}) => {
    return (
        <form className='note-container'>
            <div>
            <div>
            <p>Firstname: {firstname}</p>
            </div>
            <div>
            <p>Lastname: {lastname}</p>
            </div>
            <div>
            <p>Phone: {phone}</p>
            </div>
            <div>
            <p>Role: {role || <>Teacher</>}</p>
            </div>
            <div>
            <p>Message: {message}</p>
            </div> 
            </div>
    </form>
    );
};

export default Note;
