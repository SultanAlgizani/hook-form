// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Results from "./components/Results";
import UserForm from "./components/UserForm";


function App() {

    const [state, setState] = useState({ fname: "", lname: "", email: "", password: "", confirmPassword: "" });
    return (
        <div className="container">
            <UserForm inputs={state} setInputs={setState} />
            <Results data={state} />
        </div>
    );
}

export default App;
