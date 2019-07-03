import React from "react";

const ClickButton = props =>(
    <button type="button" 
    className="btn btn-link btn-md" 
    onClick={() => props.shuffleImages(props.id)}>Click</button>  
);

export default ClickButton;