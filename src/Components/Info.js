import React from 'react';
import './Info.css';

const Info = (props) => {

    return (
            <form className='info-container' onSubmit={props.handleSubmit} onChange={props.handleInputValue}>
            <div>
            <label htmlFor="name">First name</label> 
           <input  type="text" id="name" name="firstname"/>
            </div>
            <div>
            <label htmlFor="name">last name</label> 
           <input type="text" id="name" name="lastname"/>
            </div>
           <div>
           <label htmlFor="phone">phone</label>
    <input type="number" name="phone"/><br/>
           </div>
           <div>
           <label htmlFor="role">Role</label>
            <select name='role'>
                <option value='teacher'>Teacher</option>
                <option value='student'>Student</option>
                <option value='student'>Other</option>
            </select>
           </div>
    
    <div>
    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message"></textarea><br/>
    </div>
      <button type="submit">Submit</button>
    </form>
    );
};

export default Info;

