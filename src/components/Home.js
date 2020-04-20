import React from "react";

export default function Home() {
    return (
        <>
        <div className="col-12 mainelement hero">
            <div className="col-6 col-sm-8 col-xs-10 hero__portrait">
                <img className="col-10 col-md-12" src="hero_portrait.png" alt="Portrait of Anneline Guttormsen"/>
            </div>
            <div className="col-6 col-sm-8 col-xs-10 hero__text">
                <h1>Hei!</h1>
                <h2>
                    <span className="span__wrap span__wrap--tablet"><span className="span__wrap__text">Jeg heter Anneline Guttormsen og jeg er <span className="span__wrap"><span className="span__wrap__text">frontendutvikler</span></span></span></span>
                </h2>
            </div>
        </div>
        <div className="col-12 mainelement projects">
            <div className="col-12 projects__headline">
                <h2><span className="span__wrap"><span className="span__wrap__text">Mine prosjekter</span></span></h2>
            </div>
            <div className="col-8 col-lg-10 col-md-12 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Semesterprosjekt</h3>
                    <p>Semesterprosjektet for det tredje semestret var litt utenom det vanlige og gikk ut på å lage et spill basert på Game of Thrones i nettleseren. </p>
                    <p>Her måtte jeg bevise min forståelse for canvas elementet, JavaScript objekter og klasse og kodeoptimalisering.</p>
                    <img className="projects__article__icon" src="github_logo.svg"  alt="Github Logo"/><a href="https://github.com/annelineguttormsen/semesterprosjekt2">Kildekode for semesterprosjekt</a>
                </div>
                <div className="col-6 col-xs-12 projects__article__image">
                    <img alt="Semesterprosjekt illustrerende bilde" src="got_logo.jpg"/>
                </div>
                <div className="col-xs-12 projects__article__text projects__article__text--mobile">
                    <h3>Semesterprosjekt</h3>
                    <p>Semesterprosjektet for det tredje semestret var litt utenom det vanlige og gikk ut på å lage et spill basert på Game of Thrones i nettleseren. </p>
                    <p>Her måtte jeg bevise min forståelse for canvas elementet, JavaScript objekter og klasse og kodeoptimalisering.</p>
                    <img className="projects__article__icon" src="github_logo.svg" alt="Github Logo"/><a href="https://github.com/annelineguttormsen/semesterprosjekt2">Kildekode for semesterprosjekt</a>
                </div>
            </div>
            <div className="col-8 col-lg-10 col-md-12 projects__article">
                <div className="col-6 col-xs-12 projects__article__image">
                    <img alt="React course assignment illustrerende bilde" src="react_icon.jpg"/>
                </div>
                <div className="col-6 col-xs-12 projects__article__text">
                    <h3>React Course Assignment</h3>
                    <p>
                        Den endelige oppgaven for JavaScript Frameworks 2 handlet om å lage et React prosjekt med routing, søkefunksjon og inputvalidering.
                    </p>
                    <p>
                        Prosjektet viste ikke bare hva vi hadde lært av basic React men også Node.js.
                    </p>
                    <img className="projects__article__icon" src="github_logo.svg" alt="Github Logo"/><a href="https://github.com/annelineguttormsen/jsf_ca">Kildekode for React Course Assignment</a>
                </div>
            </div>
            <div className="col-8 col-lg-10 col-md-12 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Portfolio 1</h3>
                    <p>
                    Ved slutten av første året på Frontendutvikling fikk vi også i oppgave å lage en portfolio. Dette prosjektet var litt mer fokusert på planlegging av selve prosjektet og vise hva vi hadde lært i Adobe Illustrator.
                    </p>
                    <img className="projects__article__icon" src="github_logo.svg" alt="Github Logo"/><a href="https://github.com/annelineguttormsen/portfolio1">Kildekode for Portfolio 1</a>
                </div>
                <div className="col-6 col-xs-12 projects__article__image">
                    <img alt="Portfolio 1 illustrerende bilde" src="portfolio1_icon.jpg"/>
                </div>
                <div className="col-xs-12 projects__article__text projects__article__text--mobile">
                    <h3>Portfolio 1</h3>
                    <p>
                    Ved slutten av første året på Frontendutvikling fikk vi også i oppgave å lage en portfolio. Dette prosjektet var litt mer fokusert på planlegging av selve prosjektet og vise hva vi hadde lært i Adobe Illustrator.
                    </p>
                    <img className="projects__article__icon" src="github_logo.svg" alt="Github Logo"/><a href="https://github.com/annelineguttormsen/portfolio1">Kildekode for Portfolio 1</a>
                </div>
            </div>
        </div>
        </>
    )
}