import React from "react";
import "./style.css";

function NavBar(){
    return (
        <nav className="navbar">
            <ul className="navItems">
                <li>Clicky Game</li>
                <li>Click and image to begin!</li>
                <li id="score">Score: </li>
                <li id="topScore">Top Score: </li>
            </ul>
        </nav>
    );
}
export default NavBar;