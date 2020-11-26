import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Results = props => {
    const { fname, lname, email, password, confirmPassword } = props.data;
    return (
        <div className="m-3">
            <h5>Your Form Data:</h5>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Results;
