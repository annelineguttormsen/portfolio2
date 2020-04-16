import React from "react";

export default function Contact() {
    return (
        <div className="col-12 mainelement contact">
            <h2><span className="span__wrap"><span className="span__wrap__text">Kontakt meg!</span></span></h2>
            <form>
                <label><p>Navn</p></label>
                <input type="text" placeholder="Ole Nordmann"/>
                <label><p>E-post</p></label>
                <input type="text" placeholder="ole.nordmann@gmail.com"/>
                <label><p>Melding</p></label>
                <textarea placeholder="Din melding her"></textarea>
                <button className="btn" type="submit"><p>Send melding</p></button>
            </form>
        </div>
    )
}