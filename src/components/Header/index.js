import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container container-fluid">
                <h1 className="display-4">Clicky Game!</h1>
                <br></br>
                <h1>Click on an image to earn points,
                but don't click any more than once.</h1>
            </div>
        </div>  
    );
}
export default Header