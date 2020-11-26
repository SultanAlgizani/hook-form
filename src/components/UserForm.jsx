import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const UserForm = props => {
    const { inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className="container">
            <div className="form-group row mt-5 alert alert-secondary">
                <label htmlFor="fname" class="col-sm-2 col-form-label" >First Name </label>
                <div class="col-sm-10">
                    <input onChange={onChange} type="text" name="fname" className="form-control" />
                </div >
            </div >
            <div className="form-group row alert alert-secondary">
                <label htmlFor="lname" class="col-sm-2 col-form-label">Last Name </label>
                <div class="col-sm-10">
                    <input onChange={onChange} type="text" name="lname" className="form-control" />
                </div>
            </div>
            <div className="form-group row alert alert-secondary">
                <label htmlFor="email" class="col-sm-2 col-form-label">Email </label>
                <div class="col-sm-10">
                    <input onChange={onChange} type="text" name="email" className="form-control" />
                </div>
            </div>
            <div className="form-group row alert alert-secondary">
                <label htmlFor="password" class="col-sm-2 col-form-label">Password </label>
                <div class="col-sm-10">
                    <input onChange={onChange} type="password" name="password" className="form-control" />
                </div>
            </div>
            <div className="form-group row alert alert-secondary">
                <label htmlFor="confirmPassword" class="col-sm-2 col-form-label">Confirm Password </label>
                <div class="col-sm-10">
                    <input onChange={onChange} type="password" name="confirmPassword" className="form-control" />
                </div>
            </div>
        </form>
    );
};

export default UserForm;