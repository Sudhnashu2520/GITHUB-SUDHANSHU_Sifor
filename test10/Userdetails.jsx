import React from 'react';

const UserDetails = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Mobile No: {props.mobileNo}</p>
      <p>City: {props.city}</p>
    </div>
  );
};

export default UserDetails;