/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

const ImgCard = props => ( 
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectImage(props.charName)}
            className={props.score === 0 ? "imgStyle imgStylePrevious" : "imgStyle"}>
            <img className="cusImg" alt={props.charName} src={props.image} />
            </a> 
        </div>
    </div>
    
);


export default ImgCard;