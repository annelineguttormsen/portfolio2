import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="col-12 mainelement header">
            <Link to="/"><img className="header__logo" src="logo.svg" alt="Anneline Guttormsen logo"/></Link>
            <div className="header__rightwrap">
                <button className="btn btn--cta"><Link to="/kontakt">Kontakt meg</Link></button>
                <img className="header__menuicon" alt="Menu icon" src="hb_icon.svg"/>
            </div>
        </div>
    )
}