import React from "react";
import './Menu.css';
import {Link} from "react-router-dom";

function NavbarItem({name, href}) {
    return (
        <li className="menuItem">
            <Link className="nav-link" to={href}>{name}</Link>
            </li>
    )
}


export default function Navbar({navbarItems, auth, logout}) {
    let login_button = ''
    if (auth.is_login) {
    login_button = <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Hello, {auth.username} Logout</button>
    }
    else {
      login_button = <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>
    }
    return (
        
        <div>
                <ul className="navMenu">
                    {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                </ul>
                {login_button}
        </div>
    )
}

