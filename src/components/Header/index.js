import React from "react";
import "./style.css";

function Header() {
    return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container container-fluid">
                    <h1 class="display-4">Clicky Game!</h1>
                    <h3>Click on an image to earn points,
                    but don't click on any more than once!</h3>
                </div>
            </div>
    );
}
export default Header