import React from "react";

export default function CV() {
    return (
        <div className="col-12 mainelement cv">
            <h1 className="cv__headline"><span className="span__wrap"><span className="span__wrap__text">CV</span></span></h1>
            <div className="col-4 col-sm-6 col-xs-12 cv__list">
                <h2>Erfaring</h2>
                <ul>
                    <li>
                        <p><b>7-Eleven</b></p>
                        <p>Selger/Assisterende Butikksjef</p>
                        <p>Oktober 2018 - </p>
                    </li>
                    <li>
                        <p><b>Rema 1000</b></p>
                        <p>Butikkmedarbeider</p>
                        <p>Oktober 2017 - April 2018</p>
                    </li>
                    <li>
                        <p><b>Foodora</b></p>
                        <p>Courier</p>
                        <p>Desember 2016 - September 2017</p>
                    </li>
                </ul>
            </div>
            <div className="col-4 col-sm-6 col-xs-12 cv__list">
                <h2>Utdanning</h2>
                <ul>
                    <li>
                        <p><b>Noroff Bergen</b></p>
                        <p>Frontendutvikling</p>
                        <p>August 2018 - Juni 2020</p>
                        <p><i>Utvikling og design av nettsider og apper til web- og mobilenheter. HTML, CSS, JavaScript, jQuery, SCSS,React, Node.js, DevOps</i></p>
                    </li>
                    <li>
                        <p><b>Voss Folkehøgskule</b></p>
                        <p>Data</p>
                        <p>August 2015 - Mai 2016</p>
                    </li>
                </ul>
            </div>
            <div className="col-4 col-sm-6 col-xs-12 cv__list">
                <h2>IT-kunnskaper</h2>
                <ul>
                    <li>
                        <p><b>HTML/CSS + JavaScript</b></p>
                        <p>God kjennskap</p>
                    </li>
                    <li>
                        <p><b>Adobe Illustrator, Adobe XD og Adobe Photoshop</b></p>
                        <p>God kjennskap</p>
                    </li>
                    <li>
                        <p><b>SCSS, npm, React, jQuery</b></p>
                        <p>Moderat bruk</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}