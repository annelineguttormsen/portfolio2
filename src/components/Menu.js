import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/om_meg">Om meg</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/cv">CV</Link></li>
            </ul>
        </div>
    )
}