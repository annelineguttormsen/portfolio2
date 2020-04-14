import React from "react";

export default function About() {
    return (
        <div className="col-12 mainelement about">
            <div className="col-6 about__text">
                <h2><span className="span__wrap"><span className="span__wrap__text">Om meg</span></span></h2>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                </p>
            </div><div className="col-6 about__portrait">
                <img className="col-8" src="selvportrett.svg" alt="Illustrated portrait of Anneline Guttormsen"/>
            </div>
        </div>
    )
}