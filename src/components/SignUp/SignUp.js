import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='create-new-account'>
                    Already have an account?
                    <Link className='form-link' to="/login"> Login </Link>
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

export default SignUp;