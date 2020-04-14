import React from "react";

export default function Home() {
    return (
        <>
        <div className="col-12 mainelement hero">
            <div className="col-6 col-sm-8 col-xs-12 hero__portrait">
                <img className="col-10 col-md-12" src="hero_portrait.png" alt="Portrait of Anneline Guttormsen"/>
            </div>
            <div className="col-6 col-sm-8 col-xs-10 hero__text">
                <h1>Hei!</h1>
                <h2>Jeg heter Anneline Guttormsen og jeg er <span className="span__wrap"><span className="span__wrap__text">frontendutvikler</span></span></h2>
            </div>
        </div>
        <div className="col-12 mainelement projects">
            <div className="col-12 projects__headline">
                <h2><span className="span__wrap"><span className="span__wrap__text">Mine prosjekter</span></span></h2>
            </div>
            <div className="col-8 col-md-12 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Semesterprosjekt</h3>
                    <p>Semesterprosjektet for det tredje semestret var litt utenom det vanlige og gikk ut på å lage et spill basert på Game of Thrones i nettleseren. </p>
                    <p>Her måtte jeg bevise min forståelse for canvas elementet, JavaScript objekter og klasse og kodeoptimalisering.</p>
                    <a href="#">Kildekode for semesterprosjekt</a>
                </div>
                <div className="col-6 col-xs-12 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
                <div className="col-xs-12 projects__article__text projects__article__text--mobile">
                    <h3>Semesterprosjekt</h3>
                    <p>Semesterprosjektet for det tredje semestret var litt utenom det vanlige og gikk ut på å lage et spill basert på Game of Thrones i nettleseren. </p>
                    <p>Her måtte jeg bevise min forståelse for canvas elementet, JavaScript objekter og klasse og kodeoptimalisering.</p>
                    <a href="#">Kildekode for semesterprosjekt</a>
                </div>
            </div>
            <div className="col-8 col-md-12 projects__article">
                <div className="col-6 col-xs-12 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
                <div className="col-6 col-xs-12 projects__article__text">
                    <h3>React Course Assignment</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for React Course Assignment</a>
                </div>
            </div>
            <div className="col-8 col-md-12 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Tittel tittel</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for tittel tittel</a>
                </div>
                <div className="col-6 col-xs-12 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
                <div className="col-xs-12 projects__article__text projects__article__text--mobile">
                    <h3>Tittel tittel</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for tittel tittel</a>
                </div>
            </div>
        </div>
        </>
    )
}