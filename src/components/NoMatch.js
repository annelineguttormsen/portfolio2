import React from "react";
import { useLocation } from "react-router-dom";

export default function NoMatch() {
    let location = useLocation();
    
    return (
        <div className="mainelement nomatch">
            <h2>Fant ingen match for {location.pathname}</h2>
            <a href="/">Gå tilbake til hjemmesiden</a>
        </div>
    )
}