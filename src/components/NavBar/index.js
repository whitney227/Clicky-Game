import React from "react";
import "./style.css";

function NavBar(){
    return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <ul className="container">
                    <li className="score">Your Score:</li>   
                    <li className="topScore">Top Score:</li>
                </ul> 
            </nav>
    );
}
export default NavBar;