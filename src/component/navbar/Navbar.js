import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App.js';
import './Navbar.js';

function Navbar() {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const renderList = () => {
        if(state){
            return [
              <li><Link to="/profile">Profile</Link></li>,
              <li><Link to="/create">Create Post</Link></li>,
              <li>
                 <button className="btn grey signout btn-flat" type="submit" name="action"
              onClick={()=>{
                  localStorage.clear();
                  dispatch({type: "CLEAR"});
                  navigate('/signin');
              }}>Sign Out</button>
              </li>
            ]
        }else{
            return [
              <li><Link to="/signin">Sign In</Link></li>,
              <li><Link to="/signup">Sign Up</Link></li>
            ]
        }
    }
    return (
        <div>
            <nav>
                <div className='nav-wrapper grey m10'>
                    <Link to="/" className='brand-logo left'>SocialNetwork</Link>
                    <ul id="nav-mobile" className='right'>
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar