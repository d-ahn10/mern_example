import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Test from './test';

const App = () => (
    <div>
        <div className="app">
            <Test/>
            {/* <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1> */}
        </div>
    </div>
);

export default App;
