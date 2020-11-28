import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const UserForm = props => {
    const { inputs, setInputs } = props;
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    const handleFname = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if (e.target.value.length < 2) {
            setFnameError("First Name must be at least 2 characters");
        }
        else {
            setFnameError("");
        }
    }

    const handleLname = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if (e.target.value.length < 2) {
            setLnameError("Last Name must be at least 2 characters")
        }
        else {
            setLnameError("")
        }
    }

    const handleEmail = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        }
        else {
            setEmailError("")
        }
    }

    const handlepassword = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if (e.target.value !== props.inputs.confirmPassword) {
            setPasswordError("Passwords must match")
            console.log("passwords must match")
        }
        else {
            setPasswordError("")
        }

        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        }
        else {
            setPasswordError("")
        }
    }

    const handleconfirmPassword = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

        if (e.target.value.length < 8) {
            setconfirmPasswordError("Password must be at least 8 characters")
        }
        else {
            setconfirmPasswordError("")
        }

        if (e.target.value !== props.inputs.password) {
            setconfirmPasswordError("Passwords must match")
            console.log("passwords must match")
        }
        else {
            setconfirmPasswordError("")
        }
    }


    return (
        <form className="container">
            <div className="form-group row mt-5 alert alert-secondary">
                <label htmlFor="fname" class="col-sm-2 col-form-label" >First Name </label>
                <div class="col-sm-10">
                    <input onChange={handleFname} type="text" name="fname" className="form-control" />
                </div >
            </div >
            {
                fnameError ?
                    <p style={{ color: 'red' }}>{fnameError}</p> : ''
            }

            <div className="form-group row alert alert-secondary">
                <label htmlFor="lname" class="col-sm-2 col-form-label">Last Name </label>
                <div class="col-sm-10">
                    <input onChange={handleLname} type="text" name="lname" className="form-control" />
                </div>
            </div>
            {
                lnameError ?
                    <p style={{ color: 'red' }}>{lnameError}</p> : ''
            }

            <div className="form-group row alert alert-secondary">
                <label htmlFor="email" class="col-sm-2 col-form-label">Email </label>
                <div class="col-sm-10">
                    <input onChange={handleEmail} type="text" name="email" className="form-control" />
                </div>
            </div>
            {
                emailError ?
                    <p style={{ color: 'red' }}>{emailError}</p> : ''
            }

            <div className="form-group row alert alert-secondary">
                <label htmlFor="password" class="col-sm-2 col-form-label">Password </label>
                <div class="col-sm-10">
                    <input onChange={handlepassword} type="password" name="password" className="form-control" />
                </div>
            </div>
            {
                passwordError ?
                    <p style={{ color: 'red' }}>{passwordError}</p> : ''
            }

            <div className="form-group row alert alert-secondary">
                <label htmlFor="confirmPassword" class="col-sm-2 col-form-label">Confirm Password </label>
                <div class="col-sm-10">
                    <input onChange={handleconfirmPassword} type="password" name="confirmPassword" className="form-control" />
                </div>
            </div>
            {
                confirmPasswordError ?
                    <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''
            }
        </form>
    );
};

export default UserForm;