import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p className='create-new-account'>
                    New to Amazon?
                    <Link className='form-link' to="/signup"> Create an account </Link>
                </p>
                <div className='or-block'>
                    <div>----------</div>
                    <p> or </p>
                    <div>-----------</div>
                </div>
                <button className='btn'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;