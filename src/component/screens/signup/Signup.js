import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
<div className='signup'>
      <div className='card auth-card input-field'>
        <h3 className='h2 grey-text text-darken-3'>SocialNetwork</h3>
        <input id="username" type="text"  placeholder='username' />
        <input id="email" type="email"  placeholder='email' />
        <input id="password" type="password"  placeholder='password' />
        <button className="btn waves-effect waves-light signupbtnn" type="submit" name="action">SignUp</button>
        <h6>Already Have an Account ? <Link to ="/signin"><span className='span-udline'>SIGNIN</span></Link></h6>
      </div>
    </div>
    )
}

export default Signup