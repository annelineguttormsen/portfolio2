import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="col-12 mainelement footer">
            <div className="col-4 col-md-6 col-xs-12 footer__list">
                <ul>
                    <li>Anneline Guttormsen</li>
                    <li>+47 410 86 459</li>
                    <li>anneline.guttormsen@hotmail.no</li>
                </ul>
            </div>
            <div className="col-4 col-md-6 col-xs-12 footer__list">
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/om_meg">Om meg</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="/cv">CV</Link></li>
                </ul>
            </div>
            <img className="footer__logo" src="small_logo.svg" alt="Small logo" />
        </div>
    )
}