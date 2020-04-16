import React from "react";

export default function About() {
    return (
        <div className="col-12 mainelement about">
            <div className="col-6 col-xs-12 about__text">
                <img class="about__icon" alt="Decorative pointers" src="abt_logo.svg"/><h2><span className="span__wrap"><span className="span__wrap__text">Om meg</span></span></h2>
                <p>
                    Jeg kommer fra Alta i Finnmark og er 24 år. Jeg flyttet til Bergen i 2016 etter et år på Voss Folkehøyskole hvor jeg studerte på datalinja med fokus på JavaScript. 
                </p>
                <p>
                    I 2018 begynte jeg på Frontendutvikling på Noroff i Bergen ettersom jeg hadde mye erfaring med webutvikling men ønsket å lære enda mer. Samtidig startet jeg i 7-Eleven hvor jeg nå er assisterende butikksjef.
                </p>
            </div><div className="col-6 col-xs-12 about__portrait">
                <img className="col-8 col-sm-10" src="selvportrett.svg" alt="Illustrated portrait of Anneline Guttormsen"/>
            </div>
        </div>
    )
}