import React from "react";
import './Footer.css'

const FooterItem = ({ footer }) => {
    return (
 
            <li className="footerItem">
            <a href="#">{footer.name}</a>
            </li>
          
    )
}
const FooterList = ({footers}) => {
    return(
        <footer>
            <ul className="footer">
            {footers.map((footer) => <FooterItem footer={footer}/>)}
            </ul>
        </footer>
        
            

    )
}
export default FooterList