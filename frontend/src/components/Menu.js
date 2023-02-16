import React from "react";
import './Menu.css'


const MenuItem = ({ menu }) => {
    return (
            <li className="menuItem">
            <a href="#">{menu.name}</a>
            </li>
    )
}
const MenuList = ({menus}) => {
    return(
        <nav>
            <ul className="navMenu">
            {menus.map((menu) => <MenuItem menu={menu}/>)}
            </ul>
        </nav>
        
            

    )
}
export default MenuList