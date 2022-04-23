import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.js';

function Navbar() {
    return (
        <div>
            <nav>
                <div className='nav-wrapper grey'>
                    <Link to ="/" className='brand-logo left'>SocialNetwork</Link>
                    <ul id="nav-mobile" className='right'>
                        <li><Link to ="/signin">SignIn</Link></li>
                        <li><Link to ="/signup">SignUp</Link></li>
                        <li><Link to ="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar