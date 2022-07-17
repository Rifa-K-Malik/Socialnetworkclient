//PATH = client/src/components/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import M from 'materialize-css';

function Signup() {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //creating network request
  const PostData=()=>{
    fetch("/signup",{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{ 
      if(data.error){
        M.toast({html: data.error, classes:"#b71c1c red darken-4"})
      }
      else{
        M.toast({html:data.message, classes:"#43a047 green darken-1"})
        navigate('/signin')
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='signup'>
      <div className='card auth-card input-field'>
        <h3 className='h2 grey-text text-darken-3'>SocialNetwork</h3>
        <input id="username" type="text" placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
        <input id="email" type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="password" type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light signupbtnn" type="submit" name="action" onClick={()=>PostData()}>SignUp</button>
        <h6>Already Have an Account ? <Link to="/signin"><span className='span-udline'>SIGNIN</span></Link></h6>
      </div>
    </div>
  )
}

export default Signup