import React from "react";

function StockPhoto(props) {
    
    return (
        <div className="photo">
            <p>This is a StockPhoto component</p>
            <p>Url: {props.url}</p>
        </div>
    )
};

export  default StockPhoto;