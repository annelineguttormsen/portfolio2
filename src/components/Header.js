import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="col-12 mainelement header">
            <Link to="/"><img className="header__logo" src="logo.svg" alt="Anneline Guttormsen logo"/></Link>
            <div className="header__rightwrap">
                <ul className="header__menu">
                    <li><Link to="/">hjem</Link></li>
                    <li><Link to="/om_meg">om meg</Link></li>
                </ul>
                <ul className="header__menu">
                    <li><Link to="/kontakt">kontakt</Link></li>
                    <li><Link to="/cv">cv</Link></li>
                </ul>
            </div>
        </div>
    )
}