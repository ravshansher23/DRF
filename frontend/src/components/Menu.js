import React from "react";
import './Menu.css'
import {HashRouter, Route, BrowserRouter, Link} from "react-router-dom"

function NavbarItem({name, href}) {
    return (
        <li className="menuItem">
            <Link className="nav-link" to={href}>{name}</Link>
            </li>
    )
}


export default function Navbar({navbarItems}) {
    return (
        <nav>
                <ul className="navMenu">
                                {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                </ul>
               
        </nav>
    )
}