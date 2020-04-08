import React from "react";

export default function Home() {
    return (
        <>
        <div className="col-12 mainelement hero">
            <img className="col-6 hero__portrait" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Portrait of Anneline Guttormsen"/>
            <div className="col-6 hero__text">
                <h1>Hei!</h1>
                <h2>Jeg heter Anneline Guttormsen og jeg er <span>frontendutvikler</span></h2>
            </div>
        </div>
        <div className="col-12 mainelement projects">
            <div className="col-12 projects__headline">
                <h2><span>Mine prosjekter</span></h2>
            </div>
            <div className="col-8 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Semesterprosjekt</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for semesterprosjekt</a>
                </div>
                <div className="col-6 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
            </div>
            <div className="col-8 projects__article">
                <div className="col-6 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
                <div className="col-6 projects__article__text">
                    <h3>React Course Assignment</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for React Course Assignment</a>
                </div>
            </div>
            <div className="col-8 projects__article">
                <div className="col-6 projects__article__text projects__article__text--right">
                    <h3>Tittel tittel</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
                    </p>
                    <a href="#">Kildekode for tittel tittel</a>
                </div>
                <div className="col-6 projects__article__image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                </div>
            </div>
        </div>
        </>
    )
}