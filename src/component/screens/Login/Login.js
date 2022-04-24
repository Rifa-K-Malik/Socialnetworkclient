import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <div className='card auth-card input-field'>
        <h3 className='h2 grey-text text-darken-3'>SocialNetwork</h3>
        <input id="email" type="email"  placeholder='email' />
        <input id="password" type="password"  placeholder='password' />
        <button className="btn waves-effect waves-light loginbtnn" type="submit" name="action">SignIn</button>
        <h6>Don't Have an Account? <Link to ="/signin"><span className='span-udline'>SIGNUP</span></Link></h6>
      </div>
    </div>
  )
}

export default Login