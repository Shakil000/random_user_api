import React, { useState } from 'react';

const User = (props) => {
    const {name,email,picture,phone} = props.user;
    const [mobile,setMobile] = useState('');

    const addStyle={
        border: '5px solid red',
        marginLeft:'20px',
        padding:'5px',
        width:'40%',
        margin:'5px',
        display: 'flex',

    }
    const showPhoneNumbers = () => {
        setMobile(phone);
    }
    return (
        <div style={addStyle}>
            <div style={{marginTop:'50px'}}>
            <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft:'10px'}}>
            <h1>Name:{name.first + ' ' + name.last}</h1>
            <p><small>Email:{email}</small></p>
            <p>Phone:{mobile}</p>
            <button onClick={showPhoneNumbers} style={{backgroundColor:' #f5b041 ',padding:'5px'}}>Show Phone Number</button>
            <button onClick={() =>props.addMembers(name.first + ' ' + name.last)} style={{backgroundColor:' #a569bd ',padding:'5px'}}>Add Member</button>
            </div>
        </div>
    );
};

export default User;