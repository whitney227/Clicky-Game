import React from "react";
import "./style.css";

const ImgCard = props => (   
    <div className="card">
        <div className="img-container">
            <img className="click-item" alt={props.id} src={props.image} />
        </div>
        <span onClick={() => props.imageShuffle(props.id)} className="shuffle">
            <button type="button" className="btn btn-link btn-md">Click</button>
        </span>
    </div>
);


export default ImgCard;