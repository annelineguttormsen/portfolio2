import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="col-sm-12 menu" tabIndex="0">
            <img alt="Close menu" className="menu__icon" src="close.svg"/>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/om_meg">Om meg</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li></li>
            </ul>
        </div>
    )
}