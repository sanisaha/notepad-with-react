import React from 'react';

const Posts = ({note}) => {
    return (
            <div style={{display:'flex'}}>
                <p style={{marginRight: '10px'}}>firstname: {note.firstname}</p>
                <p style={{marginRight: '10px'}}>lastname: {note.lastname}</p>
                <p>message: {note.message}</p>
            </div>
    );
};

export default Posts;