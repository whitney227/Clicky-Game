import React from "react";
import "./style.css";

function ImgCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="click-item" alt={props.id} src={props.image} />
            </div>
        </div>
        // insert an onclick for shuffling pics
    )
}

export default ImgCard;