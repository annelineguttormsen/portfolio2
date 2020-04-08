import React from "react";

export default function Header() {
    return (
        <div className="col-12 mainelement header">
            <img className="header__logo" src="logo.svg" alt="Anneline Guttormsen logo"/>
            <div className="header__rightwrap">
                <button className="btn btn--cta">Kontakt meg</button>
                <img className="header__menuicon" src="hb_icon.svg"/>
            </div>
        </div>
    )
}