import React from "react";

function StockPhoto(props) {
    
    return (
        <div className="photo">
            <img src={props.url} alt="stock photo"/>
        </div>
    )
};

export  default StockPhoto;