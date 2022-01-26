import React from "react";

function StockPhoto(props) {
    
    return (
        <div className="photo">
            <p>This is a StockPhoto component</p>
            <img src={props.url} alt="stock photo" />
        </div>
    )
};

export  default StockPhoto;